import { styled } from '@panda/jsx';

const Container = styled('header', {
  base: {
    alignItems: 'center',
    color: 'white',
    display: 'flex',
    height: '5rem',
    justifyContent: 'space-between',
    position: 'fixed',
    textAlign: 'center',
    width: '100%',
    zIndex: '1000',
  },
});

const Logo = styled('img', {
  base: {
    cursor: 'pointer',
    height: '3rem',
    padding: '1rem',
    width: '3rem',
    zIndex: '1',
  },
});

const Header = () => (
  <Container>
    <div>
      <Logo src="/nav-logo.png" />
    </div>
  </Container>
);

export default Header;
