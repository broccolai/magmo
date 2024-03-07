import { createSignal } from 'solid-js';
import { trialsStats } from 'src/service/api-layer';
import { DestinyAccount } from 'src/service/destiny/types';
import { PlayerStats } from '../../service/destiny/trials-report.ts';
import { Input } from '../individuals/input.tsx';
import { FullPageContent } from '../global/containers.tsx';
import { styled } from '@panda/jsx';
import { H3, REGULAR_FONTS } from '../global/typography.tsx';

interface RequirementCalculatorProps {
  stats: PlayerStats;
}

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

const GridContainer = styled('div', {
  base: {
    display: 'grid',
    gridTemplateColumns: `repeat(2, 1fr)`,
    gridGap: '1rem',
  },
});

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
    appearance: 'textfield',
  },
});

const RequirementCalculator = (props: RequirementCalculatorProps) => {
  const [target, setTarget] = createSignal<number>(0);
  const [average, setAverage] = createSignal<number>(0);

  const [result, setResult] = createSignal<string>('???');

  const updateResult = (event: SubmitEvent) => {
    event.preventDefault();

    const requiredTotalKillsForGoalKD = target() * props.stats.deaths;
    const killDeficitToReachGoalKD = requiredTotalKillsForGoalKD - props.stats.kills;
    const efficiencyImprovementNeeded = average() - target();
    const adjustedKillsNeeded = killDeficitToReachGoalKD / efficiencyImprovementNeeded;
    const result = adjustedKillsNeeded * average();

    setResult(result.toString());
  };

  return (
    <>
      <SectionName>CALC</SectionName>
      <SectionContainer>
        <form onSubmit={updateResult}>
          <GridContainer>
            <InputContainer>
              <SpecialInput
                type='number'
                placeholder='target'
                required
                value={target()}
                onInput={(e) => setTarget(parseFloat(e.currentTarget.value))}
                min={0.01}
                step={0.01}
              />
              <StatName>target kd</StatName>
            </InputContainer>
            <InputContainer>
              <SpecialInput
                type='number'
                placeholder='average'
                required
                value={average()}
                onInput={(e) => setAverage(parseFloat(e.currentTarget.value))}
                min={0.01}
                step={0.01}
              />
              <StatName style={'text-align: right;'}>average kd</StatName>
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

const Title = styled('h1', {
  base: {
    margin: '4rem 0',
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
  const [stats, setStats] = createSignal<PlayerStats | null>(null);

  const loadPlayer = async (event: SubmitEvent) => {
    event.preventDefault();

    const [name, identifier] = user().split('#');

    const account: DestinyAccount = {
      name: name,
      identifer: parseInt(identifier),
    };

    await loadStats(account);
  };

  const loadStats = async (account: DestinyAccount) => {
    const stats = await trialsStats(account);

    setStats(stats);
  };

  return (
    <StyledPage>
      <Content>
        <SectionName>LOOKUP</SectionName>
        <form onSubmit={loadPlayer} autocomplete='off'>
          <Input id={'username'} label={'bungie id'} placeholder={'broccoli#0679'} signal={[user, setUser]} />
        </form>

        {stats() && <StatsDisplay stats={stats()!!} />}

        {stats() && <RequirementCalculator stats={stats()!!} />}
      </Content>
    </StyledPage>
  );
};

interface StatsDisplayProps {
  stats: PlayerStats;
}

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

const StatWrapper = styled('div', {
  base: {},
});

interface StatDisplayProps {
  align: 'left' | 'right';
  data: string | number;
  name: string;
}

const StatName = styled('div', {
  base: {
    fontSize: '0.8rem',
    color: 'grey',
  },
});

const StatDisplay = (props: StatDisplayProps) => {
  return (
    <StatWrapper style={`text-align: ${props.align}`}>
      <div>{props.data}</div>
      <StatName>{props.name}</StatName>
    </StatWrapper>
  );
};

const StatsDisplay = (props: StatsDisplayProps) => {
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
