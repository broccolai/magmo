import React from "react";
import styled from "styled-components";
import Link from "next/link";

import { faDog, faInfo } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { white, black, cyan } from "../utilities/Colors";
import { shadow } from "../utilities/Mixins";

const Projects = styled.section`
	${shadow(1)}

	background-color: ${black};
	border-radius: 1rem;
	color: ${white};
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 2fr;
	margin: auto;
	padding: 2rem;
	text-align: center;
	width: 80vw;
  position: relative;
  z-index: 2;
	
	@media (max-width: 768px) {
		grid-template-columns: 1fr 1fr;
    padding: 1rem;
	}
`;

const Project = styled.a`
  cursor: pointer;
  display: block;
  padding: 1rem;
  transition: all 1s ease-out;

  :hover {
    color: ${cyan};
  }
`;

const Title = styled.h1`
  font-family: "Josefin Sans", sans-serif;
  grid-column: 1 / 4;
  letter-spacing: 0.5rem;

  @media (max-width: 768px) {
    grid-column: 1 / 3;
  }
`;

const Glyph = styled(FontAwesomeIcon)`
  font-size: 4rem;
`;

const More = styled(Project)`
  @media (max-width: 768px) {
    grid-column: 1 / 3;
    display: none;
  }
`;

export default () => (
  <Projects>
    <Title>PROJECTS</Title>

    <Link href="/bloodhound">
      <Project>
        <Glyph icon={faDog} />
        <h4>Bloodhound</h4>
      </Project>
    </Link>

    <Project>
      <Glyph icon={faGithub} />
      <h4>Github</h4>
    </Project>

    <More>
      <Glyph icon={faInfo} />
      <h4>More?</h4>
    </More>
  </Projects>
);
