import { styled } from '@panda/jsx';
import { Text, TITLE_FONTS } from './Typography';
import { createEffect, createSignal } from 'solid-js';

const timeFormatter = new Intl.DateTimeFormat('en', {
  timeZone: 'Europe/London',
  timeStyle: 'short',
  hour12: false,
});

const Base = styled('footer', {
  base: {
    fontFamily: TITLE_FONTS,
    backgroundColor: 'smoke',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    padding: '4px',
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
    <Base>
      <Left>England | {time()}</Left>
      <Right>Github</Right>
    </Base>
  );
};

export default Footer;
