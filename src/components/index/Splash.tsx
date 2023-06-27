import { styled } from '@styled/jsx';
import { FlexSection } from '../global/Containers';
import { H1, H2 } from '../global/Typography';
import { white } from '../utilities/Colors';
import { LargeStar, MediumStar, SmallStar } from '../utilities/Data';

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
    color: white,
    marginTop: '-15vh',
    textAlign: 'center',
  },
});

const Stars = styled('div', {
  base: {
    background: 'transparent',
    borderRadius: '100%',
    left: '0',
    position: 'absolute',
    top: '0',
  },
});

const SmallStars = styled(Stars, {
  base: {
    animation: `starZero 20s linear infinite`,
    animationDirection: 'alternate',
    boxShadow: SmallStar,
    height: '4px',
    width: '4px',
  },
});

const MediumStars = styled(Stars, {
  base: {
    animation: `starOne 30s linear infinite`,
    animationDirection: 'alternate',
    boxShadow: MediumStar,
    height: '8px',
    width: '8px',
  },
});

const LargeStars = styled(Stars, {
  base: {
    animation: `starTwo 40s linear infinite`,
    animationDirection: 'alternate',
    boxShadow: LargeStar,
    height: '12px',
    width: '12px',
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
    <SmallStars />
    <MediumStars />
    <LargeStars />
    {/* <Plx parallaxData={parallaxData}> */}
    <Text>
      <H1>broccolai</H1>
      <H2>react and java development</H2>
    </Text>
    {/* </Plx> */}
  </Container>
);

export default Splash;
