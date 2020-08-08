import React from 'react';
import styled from 'styled-components';

import { faHandsHelping, faHeart, faMugHot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { black, gray, white } from '../utilities/Colors';
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
  justify-content: center;
  padding: 2rem;
  position: relative;
  text-align: center;
  width: 100%;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 1.4rem;
  height: 1.4rem;
  margin-left: 0.6rem;
  margin-right: 0.6rem;
`;

const Signature = styled.div`
  padding-top: 0.5rem;
`;

const Heart = styled(Icon)`
  color: #e90606;
`;

const Coffee = styled(Icon)`
  color: #6f4e37;
`;

const Hands = styled(Icon)`
  /* color: '#0cebb3'; */
  color: ${gray};
`;

type Props = {
  background: string;
};

const Footer = ({ background }: Props) => (
  <Base>
    <Background background={background} />
    <Signature>
      <Text color={black}>
        <Heart icon={faHeart} />
        <Hands icon={faHandsHelping} />
        <Coffee icon={faMugHot} />
      </Text>
    </Signature>
  </Base>
);

export default Footer;
