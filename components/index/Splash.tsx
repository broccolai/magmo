import React from 'react';
import Plx from 'react-plx';
import styled from 'styled-components';
import { FlexSection } from '../global/Containers';
import { H1, H3 } from '../global/Typography';
import { animStar0, animStar1, animStar2 } from '../utilities/Animations';
import { white } from '../utilities/Colors';
import { LargeStar, MediumStar, SmallStar } from '../utilities/Data';

const Container = styled(FlexSection)`
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  height: 100vh;
  position: fixed;
  width: 100%;
  z-index: -999;
`;

const Text = styled.div`
  color: ${white};
  margin-top: -5vh;
  text-align: center;

  @media (max-width: 425px) {
    font-size: 3rem;
  }
`;

const Stars = styled.div`
  background: transparent;
  border-radius: 100%;
  left: 0;
  position: absolute;
  top: 0;
`;

const SmallStars = styled(Stars)`
  animation: ${animStar0} 20s linear infinite;
  animation-direction: alternate;
  box-shadow: ${SmallStar};
  height: 4px;
  width: 4px;
`;

const MediumStars = styled(Stars)`
  animation: ${animStar1} 30s linear infinite;
  animation-direction: alternate;
  box-shadow: ${MediumStar};
  height: 8px;
  width: 8px;
`;

const LargeStars = styled(Stars)`
  animation: ${animStar2} 40s linear infinite;
  animation-direction: alternate;
  box-shadow: ${LargeStar};
  height: 12px;
  width: 12px;

  @media (max-width: 425px) {
    display: none;
  }
`;

const parallaxData = [
  {
    start: 0,
    end: '65vh',
    properties: [
      {
        startValue: 0,
        endValue: -32.5,
        unit: 'vh',
        property: 'translateY',
      },
    ],
  },
];
const Splash = () => (
  <Container>
    <SmallStars />
    <MediumStars />
    <LargeStars />
    <Plx parallaxData={parallaxData}>
      <Text>
        <H1>broccolai</H1>
        <H3>react and java development</H3>
      </Text>
    </Plx>
  </Container>
);

export default Splash;
