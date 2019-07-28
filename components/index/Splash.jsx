import React from "react";
import styled from "styled-components";
import { faSmileWink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { LogoMoveUp, LogoMove, TextMove, TextMoveUp, animStar0, animStar1, animStar2 } from "../utilities/Animations";
import { SmallStar, SmallStarMobile, MediumStar, MediumStarMedium, LargeStar, LargeStarMobile } from "../utilities/Data";

const Splash = styled.section`
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 0 0 2rem 2rem;
  align-items: center;
  display: grid;
  height: 95vh;
  justify-content: center;
  text-align: center;
  width: 100%;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  z-index: 0;
`;

const Logo = styled.img`
  grid-row: 1 / 1;
  grid-column: 1 / 1;
  background: whitesmoke;
  background-size: cover;
  border-radius: 100%;
  padding: 2rem;
  width: 40vh;
  animation: ${LogoMove} 1s ease-out;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  margin: auto;

  @media (max-width: 1024px) {
    animation: ${LogoMoveUp} 1s ease-out;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    width: 30vh;
  }
`;

const Text = styled.div`
  grid-row: 1 / 1;
  grid-column: 1 / 1;
  animation: ${TextMove} 1s ease-out;
  animation-delay: 1.1s;
  animation-fill-mode: forwards;
  font-family: "Josefin Sans", sans-serif;

  color: white;
  font-size: 4rem;

  h1,
  p {
    margin: 0;
  }

  @media (max-width: 1024px) {
    animation: ${TextMoveUp} 1s ease-out;
    animation-delay: 1.1s;
    animation-fill-mode: forwards;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SubText = styled.p`
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Stars = styled.div`
  position: absolute;
  background: transparent;
  border-radius: 100%;
`;

const SmallStars = styled(Stars)`
  height: 4px;
  width: 4px;
  box-shadow: ${SmallStar};

  animation: ${animStar0} 20s ease infinite;
  animation-direction: alternate;

  @media (max-width: 768px) {
    box-shadow: ${SmallStarMobile};
  }
`;

const MediumStars = styled(Stars)`
  height: 8px;
  width: 8px;
  box-shadow: ${MediumStar};

  animation: ${animStar1} 30s ease infinite;
  animation-direction: alternate;

  @media (max-width: 768px) {
    box-shadow: ${MediumStarMedium};
  }
`;

const LargeStars = styled(Stars)`
  height: 12px;
  width: 12px;

  box-shadow: ${LargeStar};

  animation: ${animStar2} 40s ease infinite;
  animation-direction: alternate;

  @media (max-width: 768px) {
    box-shadow: ${LargeStarMobile};
  }
`;

const Icon = styled(FontAwesomeIcon)`
  height: 2rem;

  @media (max-width: 768px) {
    height: 1rem;
  }
`;

export default () => (
  <Splash>
    <SmallStars />
    <MediumStars />
    <LargeStars />
    <Text>
      <h1>MAGMO</h1>
      <SubText>
        scroll down
        <Icon icon={faSmileWink} />
      </SubText>
    </Text>
    <Logo src="/static/logo.png" alt="background" width="100px" />
  </Splash>
);
