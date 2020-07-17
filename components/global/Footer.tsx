import React from 'react';
import styled from 'styled-components';

import { faDiscord, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Pound } from '../utilities/Animations';
import { black, red, white } from '../utilities/Colors';
import { Text } from './Typography';

const Background = styled.aside<Props>`
  background-color: ${(props) => props.background};
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -100;
`;

const Base = styled.footer`
  background-color: ${white};
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  box-sizing: border-box;
  color: ${black};
  display: grid;
  height: 150px;
  justify-content: center;
  padding: 2rem;
  position: relative;
  text-align: center;
  width: 100%;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 1.6rem;
  height: 1.6rem;
  margin-left: 0.6rem;
  margin-right: 0.6rem;
`;

const Discord = styled(Icon)`
  color: #7289da;
`;

const Twitter = styled(Icon)`
  color: #1da1f2;
`;

const Github = styled(Icon)`
  color: #333;
`;

const Signature = styled.div`
  padding-top: 0.5rem;
`;

const Heart = styled(Icon)`
  animation: ${Pound} 0.35s infinite alternate;
  color: #e90606;
  font-size: 1rem;
  height: 1rem;
`;

const Coffee = styled(Icon)`
  color: #6f4e37;
  font-size: 1rem;
  height: 1rem;
`;

const Josh = styled.a`
  color: ${red};
  text-decoration: none;
`;

type Props = {
  background: string;
};

const Footer = ({ background }: Props) => (
  <Base>
    <Background background={background} />
    <div>
      <a href="https://discord.gg/huYp67G">
        <Discord icon={faDiscord} />
      </a>
      <a href="https://twitter.com/broccoIai">
        <Twitter icon={faTwitter} />
      </a>
      <a href="https://github.com/broccolai/site">
        <Github icon={faGithub} />
      </a>
    </div>
    <Signature>
      <Text color={black}>
        Made with
        <Heart icon={faHeart} />
        &amp;
        <Coffee icon={faCoffee} />
        by
        <Josh href="https://broccol.ai">&nbsp; Josh</Josh>
      </Text>
    </Signature>
  </Base>
);

export default Footer;
