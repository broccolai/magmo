import { styled } from '@panda/jsx';
import { Show, createSignal } from 'solid-js';
import { trialsStats } from 'src/service/api-layer';
import { DestinyAccount } from 'src/service/destiny/types';
import { PlayerStats, kdForStats } from '../../service/destiny/trials-report.ts';
import { FullPageContent } from '../global/containers.tsx';
import { H3, REGULAR_FONTS } from '../global/typography.tsx';
import { StyledInput } from '../individuals/input.tsx';

const SectionContainer = styled('div', {
  base: {
    border: '2px solid black',
    background: 'white',
    width: '100%',
    padding: '1rem',
    fontFamily: REGULAR_FONTS,
    fontSize: '1rem',
  },
});

const SectionName = styled(H3, {
  base: {
    fontSize: '1.2rem',
    color: 'black',
    width: '100%',
    textAlign: 'center',
    padding: '0.5rem',
    margin: '2rem 0 0',
  },
});

const GridContainer = styled('div', {
  base: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: '1rem',
  },
});

interface SectionProps {
  stats: PlayerStats;
}

const StatsSection = (props: SectionProps) => {
  const kd = (props.stats.kills / props.stats.deaths).toFixed(3);

  return (
    <>
      <SectionName>STATS</SectionName>

      <SectionContainer>
        <GridContainer>
          <StatDisplay align='left' data={props.stats.displayName} name='name' />
          <StatDisplay align='right' data={kd} name='kd' />
          <StatDisplay align='left' data={props.stats.kills} name='kills' />
          <StatDisplay align='right' data={props.stats.deaths} name='deaths' />
        </GridContainer>
      </SectionContainer>
    </>
  );
};

const StatName = styled('div', {
  base: {
    fontSize: '0.8rem',
    color: 'grey',
  },
});

interface StatDisplayProps {
  align: 'left' | 'right';
  data: string | number;
  name: string;
}

const StatDisplay = (props: StatDisplayProps) => {
  return (
    <div style={`text-align: ${props.align}`}>
      <div>{props.data}</div>
      <StatName>{props.name}</StatName>
    </div>
  );
};

const CalcButton = styled('button', {
  base: {
    border: '1px solid black',
    gridColumn: 'span 2',
    backgroundColor: 'white',
    padding: '0.25rem',
  },
});

const InputContainer = styled('div', {
  base: {
    minWidth: 0,
  },
});

const SpecialInput = styled('input', {
  base: {
    minWidth: 0,
    width: '100%',
    border: '1px solid black',
    padding: '0.25rem',
  },
});

const CalculatorSection = (props: SectionProps) => {
  const [target, setTarget] = createSignal<string>('');
  const [average, setAverage] = createSignal<string>('');

  const [result, setResult] = createSignal<string>('???');

  const updateResult = (event: Event) => {
    event.preventDefault();

    const parsedTarget = parseFloat(target());
    const parsedAverage = parseFloat(average());

    const requiredTotalKillsForGoalKd = parsedTarget * props.stats.deaths;
    const killDeficitToReachGoalKd = requiredTotalKillsForGoalKd - props.stats.kills;
    const efficiencyImprovementNeeded = parsedAverage - parsedTarget;
    const adjustedKillsNeeded = killDeficitToReachGoalKd / efficiencyImprovementNeeded;
    const result = adjustedKillsNeeded * parsedAverage;

    setResult(result.toString());
  };

  const currentKd = parseFloat(kdForStats(props.stats, 2));

  return (
    <>
      <SectionName>CALC</SectionName>
      <SectionContainer>
        <form onSubmit={updateResult}>
          <GridContainer>
            <InputContainer>
              <SpecialInput
                type='number'
                placeholder='2.0'
                required={true}
                onInput={(e) => setTarget(e.currentTarget.value)}
                min={currentKd}
                step={0.01}
              />
              <StatName style={'text-align: center;'}>target kd</StatName>
            </InputContainer>

            <InputContainer>
              <SpecialInput
                type='number'
                placeholder='3.5'
                required={true}
                onInput={(e) => setAverage(e.currentTarget.value)}
                min={Math.max(currentKd, parseFloat(target())) + 0.01}
                step={0.01}
              />
              <StatName style={'text-align: center;'}>average kd</StatName>
            </InputContainer>

            <CalcButton>GO</CalcButton>

            <div style='text-align: center; grid-column: span 2; margin: 0.5rem 0;'>
              <div>{result()}</div>
              <StatName>kills required</StatName>
            </div>
          </GridContainer>
        </form>
      </SectionContainer>
    </>
  );
};

const StyledPage = styled(FullPageContent, {
  base: {
    padding: '15vh 0',
  },
});

const Content = styled('div', {
  base: {
    display: 'flex',
    justifyContent: 'normal',
    flexDirection: 'column',
    width: '20vw',
    minWidth: '400px',
    height: '100%',
  },
});

export const KillDeath = () => {
  const [user, setUser] = createSignal<string>('');
  const [stats, setStats] = createSignal<PlayerStats | undefined>(undefined);

  const loadPlayer = async (event: Event) => {
    event.preventDefault();

    const [name, identifier] = user().split('#');

    if (!(name && identifier)) {
      return;
    }

    const account: DestinyAccount = {
      name: name,
      identifer: parseInt(identifier),
    };

    const stats = await trialsStats(account);
    setStats(stats);
  };

  return (
    <StyledPage>
      <Content>
        <SectionName>LOOKUP</SectionName>
        <form onSubmit={loadPlayer} autocomplete='off'>
          <StyledInput
            pattern='^[^#]{1,26}#[0-9]{1,4}$'
            title='must be a valid bungie id format'
            placeholder={'broccoli#679'}
            onChange={(event) => setUser(event.target.value)}
          />
        </form>

        <Show when={stats()} keyed={true}>
          {(stats) => (
            <>
              <StatsSection stats={stats} />
              <CalculatorSection stats={stats} />
            </>
          )}
        </Show>
      </Content>
    </StyledPage>
  );
};
