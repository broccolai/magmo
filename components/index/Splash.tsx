import React from 'react';
import styled from 'styled-components';

import { FlexSection } from '../global/Containers';
import { H1, H4 } from '../global/Typography';
import { animStar0, animStar1, animStar2 } from '../utilities/Animations';
import { white } from '../utilities/Colors';
import { LargeStar, MediumStar, SmallStar } from '../utilities/Data';

const Container = styled(FlexSection)`
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  height: 95vh;
`;

const Text = styled.div`
  color: ${white};
  font-size: 4rem;
  text-align: center;
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
