import React from 'react';
import styled from 'styled-components';
import { H1, H4 } from '../global/Typography';
import { animStar0, animStar1, animStar2 } from '../utilities/Animations';
import { white } from '../utilities/Colors';
import { LargeStar, MediumStar, SmallStar } from '../utilities/Data';

const Container = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  height: 95vh;
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  justify-content: center;
`;

const Text = styled.div`
  font-size: 4rem;
  color: ${white};
  text-align: center;
`;

const Stars = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: transparent;
  border-radius: 100%;
`;

const SmallStars = styled(Stars)`
  width: 4px;
  height: 4px;
  box-shadow: ${SmallStar};

  animation: ${animStar0} 20s linear infinite;
  animation-direction: alternate;
`;

const MediumStars = styled(Stars)`
  width: 8px;
  height: 8px;
  box-shadow: ${MediumStar};

  animation: ${animStar1} 30s linear infinite;
  animation-direction: alternate;
`;

const LargeStars = styled(Stars)`
  width: 12px;
  height: 12px;

  box-shadow: ${LargeStar};

  animation: ${animStar2} 40s linear infinite;
  animation-direction: alternate;
`;

const Splash = () => (
  <Container>
    <SmallStars />
    <MediumStars />
    <LargeStars />
    <Text>
      <H1>MAGMO</H1>
      <H4>React and Kotlin development</H4>
    </Text>
  </Container>
);

export default Splash;
