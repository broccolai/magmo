import React from 'react';
import styled from 'styled-components';
import { H1 } from '../global/Typography';
import { black } from '../utilities/Colors';

const Container = styled.section`
  position: relative;
  z-index: 1;
  display: flex;
  padding: 4rem;
  margin-top: -5rem;
  background: ${black};
  border-radius: 2rem 2rem 0 0;
  align-items: center;
  justify-content: center;
`;

const Intro = () => (
  <Container>
    <H1>IN PROGRESS...</H1>
  </Container>
);

export default Intro;
