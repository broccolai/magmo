import { styled } from '@panda/jsx';
import { WiDaySunny } from '@aminya/solid-icons/wi';
import { TITLE_FONTS } from './Typography';

const Base = styled('footer', {
  base: {
    fontFamily: TITLE_FONTS,
    backgroundColor: 'smoke',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    padding: '4px',
    fontSize: '1.4rem',
    height: '5vh',
    alignContent: 'center',
  },
});

const Right = styled('p', {
  base: {
    textAlign: 'right',
  },
});

const Header = () => (
  <Base>
    <div />
    <Right>
      <WiDaySunny />
    </Right>
  </Base>
);

export default Header;
