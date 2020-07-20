import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBook, faFaucet, faLink } from '@fortawesome/free-solid-svg-icons';
import { faCorn } from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ChildFlexSection } from '../global/Containers';
import { Bold, FooterText, H2, H3, H4, Text } from '../global/Typography';
import { Card, CardBody, CardBottomBody, CardHeader } from '../individuals/Card';
import { Icon } from '../individuals/Icon';
import { black, gray, smoke } from '../utilities/Colors';
import { fadeGradient, hexToRGBA } from '../utilities/Functions';

const Container = styled(ChildFlexSection)`
  margin-top: 90vh;
`;

const Title = styled(H2)`
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

const LogoIcon = styled(FontAwesomeIcon)`
  color: #fdf5af;
  filter: drop-shadow(0 8px 8px rgba(0, 0, 0, 0.6));
  height: 5.6rem;
  margin-bottom: 1rem;
  padding: 0.2rem;
  width: 5.6rem !important;
`;

const Intro = () => {
  const [amount, setAmount] = useState('0');

  useEffect(() => {
    const execute = async () => {
      const status = await fetch('https://tickets.broccol.ai/api/v1/status/count', {
        method: 'GET',
        mode: 'cors',
      });

      setAmount(await status.text());
    };

    execute();
  });

  return (
    <Container index={1} backing={black} padding="2.5rem clamp(.6rem, 4vw, 4rem)">
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
          <Icon
            href="https://www.spigotmc.org/resources/pure-tickets-easy-to-use-ticket-system.71677/"
            icon={faFaucet}
            basis="1.4rem"
            backing={hexToRGBA(gray, 10)}
          />
          <Icon
            href="https://github.com/broccolai/tickets/wiki"
            icon={faBook}
            basis="1.4rem"
            backing={hexToRGBA(gray, 10)}
          />
          <Icon
            href="https://github.com/broccolai/tickets/"
            icon={faGithub}
            basis="1.4rem"
            backing={hexToRGBA(gray, 10)}
          />
          <Icon href="https://discord.gg/huYp67G" icon={faDiscord} basis="1.4rem" backing={hexToRGBA(gray, 10)} />
        </CardBottomBody>
        <FooterText>SERVING {amount} DISCORD GUILDS</FooterText>
      </Card>
      <Card>
        <CardHeader backing={fadeGradient(smoke, 15) + ", url('MAGMOBG.png')"}>
          <Logo src="/logo.svg" />
          <Name>BROCCOL.AI</Name>
          <Slogan>NEXTJS SITE</Slogan>
        </CardHeader>
        <CardBody>
          <Bold>ABOUT</Bold>
          <Text color={gray}>
            broccol.ai is a nextjs site build with styled-components that I use to practice react and to store api
            endpoints for my other projects
          </Text>
        </CardBody>
        <CardBottomBody>
          <Icon href="https://github.com/broccolai/site" icon={faGithub} basis="1.4rem" backing={hexToRGBA(gray, 10)} />
          <Icon href="https://broccol.ai/" icon={faLink} basis="1.4rem" backing={hexToRGBA(gray, 10)} />
        </CardBottomBody>
      </Card>
      <Card>
        <CardHeader backing={fadeGradient(smoke, 15) + ", url('CORNBG.png')"}>
          <LogoIcon icon={faCorn} />
          <Name>CORN</Name>
          <Slogan>JAVA LIBRARY</Slogan>
        </CardHeader>
        <CardBody>
          <Bold>ABOUT</Bold>
          <Text color={gray}>
            corn is a extremely opinionated Java library that is mostly for my personal use, it currently has a core and
            a spigot module
          </Text>
        </CardBody>
        <CardBottomBody>
          <Icon href="https://github.com/broccolai/corn" icon={faGithub} basis="1.4rem" backing={hexToRGBA(gray, 10)} />
        </CardBottomBody>
      </Card>
    </Container>
  );
};

export default Intro;
