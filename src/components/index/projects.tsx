import { styled } from '@panda/jsx';
import { FlexSection } from '../global/Containers';

const Container = styled(FlexSection, {
  base: {
    display: 'flex',
    background: 'cyan',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
    overflowY: 'scroll',
  },
});

const Intro = () => <Container />;

export default Intro;
