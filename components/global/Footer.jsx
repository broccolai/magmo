import React from "react";
import styled from "styled-components";
import { faHeart, faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faDiscord,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { white, black, red } from "../utilities/Colors";
import { Pound } from "../utilities/Animations";

const Background = styled.aside`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -100;
  background-color: ${props => props.background};
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
  h5 {
    font-size: 1rem;
    margin: 0;
  }
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

export default class Footer extends React.Component {
  render() {
    return (
      <Base>
        <Background background={this.props.background} />
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
          <h5>
            Made with
            <Heart icon={faHeart} />
            &amp;
            <Coffee icon={faCoffee} />
            by
            <Josh href="https://magmo.co.uk">&nbsp; Josh</Josh>
            <br />
            <span>&copy; Copyright 2018 Josh Taylor</span>
          </h5>
        </Signature>
      </Base>
    );
  }
}
