import styled from 'styled-components';
import { smoke } from '../utilities/Colors';

type ButtonProps = {
  stretch: boolean;
};

export const Button = styled.button<ButtonProps>`
  width: ${(props) => (props.stretch ? '100%' : 'auto')};
  padding: 1rem;
  font-size: 12px;
  font-weight: bold;
  color: #31302b;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  background-color: ${smoke};
  border-radius: 0.2rem;
  box-shadow: inset 0 0 0 0 #31302b;
  transition: box-shadow ease 0.8s;

  &:active {
    transform: scale(0.95);
  }

  &:hover {
    color: #fff;
    box-shadow: inset 300px 0 0 0 #424242;
  }
`;
