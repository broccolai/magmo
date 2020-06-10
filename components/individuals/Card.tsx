import styled from 'styled-components';

import { smoke } from '../utilities/Colors';

type BackingProps = {
  backing?: string;
};

export const Card = styled.article<BackingProps>`
  background: ${(props) => props.backing || smoke};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  position: relative;
  transition: transform 1s ease;
  width: 20rem;

  :hover {
    transform: translateY(-8px);
  }
`;

export const CardHeader = styled.div<BackingProps>`
  align-items: center;
  background-image: ${(props) => props.backing || 'unset'};
  background-size: cover;
  border-radius: 1rem 1rem 0 0;
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 2rem;
  text-align: center;
`;

export const CardBody = styled.div`
  padding: 0.4rem 1rem 1.4rem;
`;

export const CardBottomBody = styled.div`
  margin-top: auto;
  padding: 0.4rem 1rem 3.4rem;
`;
