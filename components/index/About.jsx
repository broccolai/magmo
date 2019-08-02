import React from "react";
import styled from "styled-components";

import { white, black } from "../utilities/Colors";
import { colors } from "../utilities/Animations";

const About = styled.section`
  text-align: center;
  background: linear-gradient(
    270deg,
    #ee786e,
    #ee7752,
    #e73c7e,
    #23a6d5,
    #ee786e,
    #23d5ab,
    #a2ccb6,
    #ee786e
  );
  background-size: 2000% 2000%;
  animation: ${colors} 60s linear infinite;
  margin-top: -4rem;
  margin-bottom: -2rem;
  padding: 8rem 4rem 6rem;
  z-index: 1;
`;

const Name = styled.h3`
  color: ${white};
  display: inline;
  font-family: "Josefin Sans", sans-serif;
  font-size: 2rem;
  letter-spacing: 0.4rem;
  text-shadow: 0px 0px 2rem ${black};
`;

const Content = styled.p`
  color: ${white};
  text-shadow: 0px 0px 1rem ${black};
`;

export default () => (
  <About>
    <Name>SERVICES</Name>
    <Content>
      I offer a variety of web development services. 
      If you'd like to know more feel free to contact me on Discord or Twitter
    </Content>
  </About>
);
