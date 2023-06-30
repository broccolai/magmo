import { styled } from '@panda/jsx';
import { createSignal } from 'solid-js';
import { TITLE_FONTS } from './Typography';

const timeFormatter = new Intl.DateTimeFormat('en', {
  timeZone: 'Europe/London',
  timeStyle: 'short',
  hour12: true,
});

const Wrapper = styled('footer', {
  base: {
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    bottom: 0,
  },
});

const Base = styled('footer', {
  base: {
    fontFamily: TITLE_FONTS,
    alignContent: 'center',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    padding: '4px',
    height: '5vh',
    width: '100%',
    maxWidth: '800px',
  },
});

const Left = styled('p', {});

const Right = styled('p', {
  base: {
    textAlign: 'right',
  },
});

const Footer = () => {
  const [time, setTime] = createSignal('');

  const updateTime = () => {
    const current = Date.now();
    setTime(timeFormatter.format(current));
  };

  updateTime();
  setInterval(() => updateTime(), 1000);

  return (
    <Wrapper>
      <Base>
        <Left>England | {time()}</Left>
        <Right>Github</Right>
      </Base>
    </Wrapper>
  );
};

export default Footer;
