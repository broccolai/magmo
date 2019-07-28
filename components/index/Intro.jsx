import React, { Component } from "react";
import styled from "styled-components";

import { faBolt, faBook, faLeaf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { white, black, blue, purple, orange, cyan } from "../utilities/Colors";
import { Blocks, Block } from "./Blocks";

const Container = styled.section`
  position: relative;
  top: -5rem;
  z-index: 1;
  border-radius: 2rem 2rem 0 0;

  @media (max-width: 768px) {
    top: -6rem;
  }
`;

const Title = styled.h1`
  color: ${white};
  letter-spacing: 0.5rem;
  font-family: "Josefin Sans", sans-serif;
  font-size: 2rem;
  text-align: center;
  padding-top: 4rem;
  padding-bottom: 1rem;
  text-shadow: 0 0 1.5rem ${black};

  @media (max-width: 768px) {
    padding-top: 5rem;
  }
`;

const Background = styled.aside`
  background-color: ${cyan};
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -100;
  padding-bottom: 8rem;
  border-radius: 2rem 2rem 0 0;
`;

const Icon = styled(FontAwesomeIcon)`
  height: 4rem;
  font-size: 4rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    float: left;
    height: 3rem;
  }
`;

export default class Intro extends Component {
  render() {
    return (
      <Container>
        <Title>INFORMATION</Title>
        <Blocks>
          <Block color={blue}
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="800"
          data-aos-easing="ease">
            <Icon icon={faLeaf} />
            <h3>Light</h3>
            <p>Built with CSS Grid</p>
          </Block>
          <Block
            middle
            color={purple}
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-duration="1200"
            data-aos-easing="ease"
          >
            <Icon icon={faBook} />
            <h3>Modern</h3>
            <p>Built using Styled Components</p>
          </Block>
          <Block color={orange}
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1000"
          data-aos-easing="ease">
            <Icon icon={faBolt} />
            <h3>React</h3>
            <p>Built with React</p>
          </Block>
        </Blocks>
        <Background />
      </Container>
    );
  }
}
