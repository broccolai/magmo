import { styled } from '@panda/jsx';
import { FlexSection } from '../global/Containers';

const Container = styled(FlexSection, {
  base: {
    display: 'flex',
    background: '#FFF8B2',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
    overflowY: 'scroll',
  },
});

const About = () => <Container />;

export default About;
