import { faDiscord, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { Pound } from '../utilities/Animations';
import { black, red, white } from '../utilities/Colors';
import { Text } from './Typography';

const Background = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -100;
  width: 100%;
  height: 100%;
  background-color: ${black};
`;

const Base = styled.footer`
  position: relative;
  display: grid;
  width: 100%;
  height: 150px;
  box-sizing: border-box;
  padding: 2rem;
  color: ${black};
  text-align: center;
  background-color: ${white};
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  justify-content: center;
`;

const Icon = styled(FontAwesomeIcon)`
  height: 1.6rem;
  margin-right: 0.6rem;
  margin-left: 0.6rem;
  font-size: 1.6rem;
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
  height: 1rem;
  font-size: 1rem;
  color: #e90606;
  animation: ${Pound} 0.35s infinite alternate;
`;

const Coffee = styled(Icon)`
  height: 1rem;
  font-size: 1rem;
  color: #6f4e37;
`;

const Josh = styled.a`
  color: ${red};
  text-decoration: none;
`;

const Footer = () => (
  <Base>
    <Background />
    <div>
      <a href="https://discordapp.com/">
        <Discord icon={faDiscord} />
      </a>
      <a href="https://twitter.com/BroccoIai">
        <Twitter icon={faTwitter} />
      </a>
      <a href="https://github.com/Broccolai/magmo">
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
        <Josh href="https://magmo.co.uk">&nbsp; Josh</Josh>
      </Text>
    </Signature>
  </Base>
);

export default Footer;
