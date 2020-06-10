import React from 'react';
import styled from 'styled-components';

import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBook, faFaucet, faLink } from '@fortawesome/free-solid-svg-icons';

import { ChildFlexSection } from '../global/Containers';
import { Bold, FooterText, H1, H3, H4, Text } from '../global/Typography';
import { Card, CardBody, CardBottomBody, CardHeader } from '../individuals/Card';
import { Icon } from '../individuals/Icon';
import { black, gray, smoke } from '../utilities/Colors';
import { fadeGradient, hexToRGBA } from '../utilities/Functions';

const Title = styled(H1)`
  flex-basis: 100%;
  margin-bottom: 3rem;
`;

const Name = styled(H3)`
  font-size: 1.4rem;
  font-weight: normal;
  letter-spacing: 2px;
`;

const Slogan = styled(H4)`
  color: ${gray};
  font-size: 1rem;
  letter-spacing: 1px;
`;

const Logo = styled.img`
  filter: drop-shadow(0 8px 8px rgba(0, 0, 0, 0.6));
  height: 6rem;
  margin-bottom: 1rem;
  width: 6rem;
`;

const Intro = () => (
  <ChildFlexSection index={1} backing={black} padding="4rem">
    <Title>PROJECTS</Title>
    <Card>
      <CardHeader backing={fadeGradient(smoke, 15) + ", url('PTBG.png')"}>
        <Logo src="/PureTicketsLogo.svg" />
        <Name>PURE TICKETS</Name>
        <Slogan>SPIGOT PLUGIN</Slogan>
      </CardHeader>
      <CardBody>
        <Bold>ABOUT</Bold>
        <Text color={gray}>
          Pure Tickets is a ticket management plugin made for Spigot / Paper. Its features include; players being able
          to submit multiple tickets and discord integeration
        </Text>
      </CardBody>
      <CardBottomBody>
        <Icon href="" icon={faFaucet} basis="1.4rem" backing={hexToRGBA(gray, 10)} />
        <Icon href="" icon={faBook} basis="1.4rem" backing={hexToRGBA(gray, 10)} />
        <Icon href="" icon={faGithub} basis="1.4rem" backing={hexToRGBA(gray, 10)} />
        <Icon href="" icon={faDiscord} basis="1.4rem" backing={hexToRGBA(gray, 10)} />
      </CardBottomBody>
      <FooterText>SERVING 10 DISCORD GUILDS</FooterText>
    </Card>
    <Card>
      <CardHeader backing={fadeGradient(smoke, 15) + ", url('PTBG.png')"}>
        <Logo src="/logo.svg" />
        <Name>MAGMO</Name>
        <Slogan>NEXTJS SITE</Slogan>
      </CardHeader>
      <CardBody>
        <Bold>ABOUT</Bold>
        <Text color={gray}>
          MAGMO is a nextjs site build with styled-components that I use to practice react and to store api endpoints
          for my other projects
        </Text>
      </CardBody>
      <CardBottomBody>
        <Icon href="" icon={faGithub} basis="1.4rem" backing={hexToRGBA(gray, 10)} />
        <Icon href="" icon={faLink} basis="1.4rem" backing={hexToRGBA(gray, 10)} />
      </CardBottomBody>
    </Card>
  </ChildFlexSection>
);

export default Intro;
