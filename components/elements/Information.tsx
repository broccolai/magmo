import React from 'react';
import styled from 'styled-components';
import { REGULAR_FONTS, Text } from '../global/Typography';
import { white } from '../utilities/Colors';

const Container = styled.div`
  margin: 1rem 0;
`;

const Heading = styled.span`
  font: 600 12px ${REGULAR_FONTS};
  color: #8b8b8b;
  letter-spacing: 1px;
`;

type InformationProps = {
  heading: string;
  value: string;
};

export const Information = ({ heading, value }: InformationProps) => (
  <Container>
    <Heading>{heading}</Heading>
    <Text color={white}>{value}</Text>
  </Container>
);
