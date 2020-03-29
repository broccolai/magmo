import React from 'react';
import { ChildFlexSection } from '../global/Containers';
import { H1 } from '../global/Typography';
import { black } from '../utilities/Colors';

const Intro = () => (
  <ChildFlexSection index={1} backing={black} padding="4rem">
    <H1>IN PROGRESS...</H1>
  </ChildFlexSection>
);

export default Intro;
