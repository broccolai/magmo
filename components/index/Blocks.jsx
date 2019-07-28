import styled from "styled-components";
import { white } from "../utilities/Colors";
import { shadow } from "../utilities/Mixins";

export const Block = styled.div`
  border-radius: 1rem;
  color: ${white};
  padding: ${props => (props.middle ? "3.4rem" : "2.4rem")};
  text-align: center;
  background-color: ${props => props.color};

  margin: ${props => (props.middle ? "-1rem" : "0")};
  z-index: ${props => (props.middle ? 2 : 1)};
  ${props => (props.middle ? `${shadow(2)}` : "0")};

  @media (max-width: 768px) {
    padding: 1.8rem;
    text-align: right;
  }
`;

export const Blocks = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: auto;
  padding: 0 2rem 1rem;
  position: relative;
  width: calc(80vw + 4rem);

  h3 {
    display: block;
    margin: 0.4rem 0;
  }

  p {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
    width: calc(80vw + 2rem);

    h3 {
      margin: 0;
    }

    p {
      font-size: 14px;
    }
  }
`;
