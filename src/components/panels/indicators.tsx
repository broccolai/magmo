import { css } from '@panda/css';
import { styled } from '@panda/jsx';

const navigationStyle = css({
  position: 'fixed',
  right: '20px',
  top: '50vh',
  transform: 'translateY(-50%)',
});

const Indicator = styled('div', {
  base: {
    fontSize: '0.4rem',
    textAlign: 'center',
    transition: 'font-size 200ms ease',
    cursor: 'pointer',
    color: 'black',
  },
  variants: {
    state: {
      true: {
        fontSize: '0.8rem',
        lineHeight: '1.5',
      },
    },
  },
});

const Indicators = (props: {
  count: number;
  activeIndex: number;
  setIndicator: (section: number) => void;
}) => {
  const indicatorHtml = Array.from({ length: props.count }, (_, i) => {
    // const indicatorStyles = [indicator, i === props.activeIndex - 1 && active];
    return (
      <Indicator state={i + 1 === props.activeIndex} onClick={() => props.setIndicator(i + 1)}>
        &#11044;
      </Indicator>
    );
  });

  return <div class={navigationStyle}>{indicatorHtml}</div>;
};

export default Indicators;
