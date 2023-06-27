import { styled } from '@styled/jsx';
import { css } from '@styled/css'

import { createEffect, createSignal } from 'solid-js';
import {
  FaBrandsDiscord,
  FaBrandsGithub,
  FaSolidBook,
  FaSolidFaucet,
  FaSolidLink,
  FaSolidPepperHot,
} from '@aminya/solid-icons/fa';
import { ChildFlexSection } from '../global/Containers';
import { Bold, FooterText, H3, H4, Text } from '../global/Typography';
import { Card, CardBody, CardBottomBody, CardHeader } from '../individuals/card';
import { createVariable, fadeGradient, hexToRGBA } from '../utilities/Functions';
import Icon from '../individuals/icon';
import ticketsBackground from './PTBG.png';
import { token } from '@styled/tokens';

const Container = styled(ChildFlexSection, {
  base: {
    marginTop: '90vh !important',
    padding: '2.5rem clamp(.6rem, 4vw, 4rem)',
    backgroundColor: 'black',
  },
});

const Title = styled(H3, {
  base: {
    flexBasis: '100%',
    marginBottom: '3rem !important',
  },
});

const Name = styled(H3, {
  base: {
    color: `black`,
    fontSize: '1.4rem !important',
    fontWeight: 'normal !important',
    letterSpacing: '2px !important',
  },
});

const Slogan = styled(H4, {
  base: {
    color: gray,
    fontSize: '1rem  !important',
    letterSpacing: '1px',
  },
});

const Logo = styled('img', {
  base: {
    filter: 'drop-shadow(0 8px 8px rgba(0, 0, 0, 0.6))',
    height: '6rem',
    marginBottom: '1rem',
    width: '6rem',
  },
});

const backgroundVariable = createVariable('image');

const StyledCardHeader = styled('a', {
  base: {
    backgroundImage: `${fadeGradient(smoke, 15)}, ${backgroundVariable.wrapped}`,
  },
});

const iconStyle = css({
  color: '#fdf5af !important',
  filter: 'drop-shadow(0 8px 8px rgba(0, 0, 0, 0.6))',
  height: '5.6rem',
  marginBottom: '1rem',
  padding: '0.2rem',
  width: '5.6rem !important',
});

const Intro = () => {
  const [amount, setAmount] = createSignal('0');

  createEffect(() => {
    fetch('https://tickets.broccol.ai/api/v1/status/count', {
      method: 'GET',
      mode: 'cors',
    })
      .then((res) => res.text())
      .then((text) => setAmount(text))
      .catch(() => setAmount('?'));
  });

  return (
    <Container>
      <Title>PROJECTS</Title>
      <Card>
        <StyledCardHeader style={{ [backgroundVariable.identifier]: `url('${ticketsBackground}')` }}>
          <Logo src="/PureTicketsLogo.svg" alt="Pure Tickets Logo" />
          <Name>PURE TICKETS</Name>
          <Slogan>SPIGOT PLUGIN</Slogan>
        </StyledCardHeader>
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
            Glyph={FaSolidFaucet}
            basis="1.4rem"
            backing={hexToRGBA(gray, 10)}
            aria="Spigot"
          />
          <Icon
            href="https://github.com/broccolai/tickets/wiki"
            Glyph={FaSolidBook}
            basis="1.4rem"
            backing={hexToRGBA(token('colors.gray'), 10)}
            aria="Github Wiki"
          />
          <Icon
            href="https://github.com/broccolai/tickets/"
            Glyph={FaBrandsGithub}
            basis="1.4rem"
            backing={hexToRGBA(gray, 10)}
            aria="Github"
          />
          <Icon
            href="https://discord.gg/huYp67G"
            Glyph={FaBrandsDiscord}
            basis="1.4rem"
            backing={hexToRGBA(gray, 10)}
            aria="Discord"
          />
        </CardBottomBody>
        <FooterText>SERVING {amount()} DISCORD GUILDS</FooterText>
      </Card>
      <Card>
        <StyledCardHeader style={{ [backgroundVariable.identifier]: "url('MAGMOBG.png')" }}>
          <Logo src="/logo.svg" alt="Magmo Logo" />
          <Name>BROCCOL.AI</Name>
          <Slogan>NEXTJS SITE</Slogan>
        </StyledCardHeader>
        <CardBody>
          <Bold>ABOUT</Bold>
          <Text color={gray}>
            broccol.ai is a nextjs site build with styled-components that I use to practice react and to store api
            endpoints for my other projects
          </Text>
        </CardBody>
        <CardBottomBody>
          <Icon
            href="https://github.com/broccolai/site"
            Glyph={FaBrandsGithub}
            basis="1.4rem"
            backing={hexToRGBA(gray, 10)}
            aria="Github"
          />
          <Icon
            href="https://broccol.ai/"
            Glyph={FaSolidLink}
            basis="1.4rem"
            backing={hexToRGBA(gray, 10)}
            aria="Website URL"
          />
        </CardBottomBody>
      </Card>
      <Card>
        <StyledCardHeader style={{ [backgroundVariable.identifier]: "url('CORNBG.png')" }}>
          <FaSolidPepperHot class={iconStyle} />
          <Name>CORN</Name>
          <Slogan>JAVA LIBRARY</Slogan>
        </StyledCardHeader>
        <CardBody>
          <Bold>ABOUT</Bold>
          <Text color={gray}>
            corn is a extremely opinionated Java library that is mostly for my personal use, it currently has a core and
            a spigot module
          </Text>
        </CardBody>
        <CardBottomBody>
          <Icon
            href="https://github.com/broccolai/corn"
            Glyph={FaBrandsGithub}
            basis="1.4rem"
            backing={hexToRGBA(gray, 10)}
            aria="Github"
          />
        </CardBottomBody>
      </Card>
    </Container>
  );
};

export default Intro;
