import { styled } from '@panda/jsx';
import { FlexSection } from '../global/Containers';
import { H1, H2 } from '../global/Typography';

const Container = styled(FlexSection, {
  base: {
    backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    height: '100vh',
    position: 'fixed',
    width: '100%',
    zIndex: '-999',
  },
});

const Text = styled('div', {
  base: {
    color: 'white',
    marginTop: '-15vh',
    textAlign: 'center',
  },
});

// @media (max-width: 425px) {
//   display: none;
// }

//  const parallaxData = [
//    {
//      start: 0,
//      end: '75vh',
//      properties: [
//        {
//          startValue: 0,
//          endValue: -36,
//          unit: 'vh',
//          property: 'translateY',
//        },
//      ],
//    },
//  ];
const Splash = () => (
  <Container>
    {/* <Plx parallaxData={parallaxData}> */}
    <Text>
      <H1>broccolai</H1>
      <H2>react and java development</H2>
    </Text>
    {/* </Plx> */}
  </Container>
);

export default Splash;
