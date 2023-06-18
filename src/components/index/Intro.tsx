import {styled} from '@macaron-css/solid';

import { ChildFlexSection } from '../global/Containers';
import { Bold, FooterText, H3, H4, Text } from '../global/Typography';
import { Card, CardBody, CardBottomBody, CardHeader } from '../individuals/card';
import { black, gray, smoke } from '../utilities/Colors';
import { createVariable, fadeGradient } from '../utilities/Functions';
import { createEffect, createSignal } from 'solid-js';

const Container = styled(ChildFlexSection, {
  base: {
    marginTop: '90vh !important',
    padding: '2.5rem clamp(.6rem, 4vw, 4rem)',
    backgroundColor: black
  }
})

const Title = styled(H3, {
  base: {
    flexBasis: '100%',
    marginBottom: '3rem'
  }
})

const Name = styled(H3, {
  base: {
    color: black,
    fontSize: '1.4rem',
    fontWeight: 'normal',
    letterSpacing: "2px"
  }
})

const Slogan = styled(H4, {
  base: {
    color: gray,
    fontSize: '1rem',
    letterSpacing: '1px'
  }
})

const Logo = styled('img', {
  base: {
    filter: 'drop-shadow(0 8px 8px rgba(0, 0, 0, 0.6))',
    height: '6rem',
    marginBottom: '1rem',
    width: "6rem"
  }
})

const backgroundVariable = createVariable('image')

const StyledCardHeader = styled(CardHeader, {
  base: {
    backgroundImage: fadeGradient(smoke, 15) + `, ${backgroundVariable.wrapped}`
  }
})

// const LogoIcon = styled(FontAwesomeIcon, {
//   base: {
//     color: '#fdf5af',
//     filter: 'drop-shadow(0 8px 8px rgba(0, 0, 0, 0.6))',
//     height: '5.6rem',
//     marginBottom: '1rem',
//     padding: '0.2rem',
//     width: '5.6rem !important'
//   }
// })

const Intro = () => {
  const [amount, setAmount] = createSignal('0');

  createEffect(() => {
    const execute = async () => {
      const status = await fetch('https://tickets.broccol.ai/api/v1/status/count', {
        method: 'GET',
        mode: 'cors',
      });

      setAmount(await status.text());
    };

    execute();
  }, []);

  return (
    <Container>
      <Title>PROJECTS</Title>
      <Card>
        <StyledCardHeader style={{[backgroundVariable.identifier]: 'url(\'PTBG.png\')'}}>
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
          {/* <Icon
            href="https://www.spigotmc.org/resources/pure-tickets-easy-to-use-ticket-system.71677/"
            icon={faFaucet}
            basis="1.4rem"
            backing={hexToRGBA(gray, 10)}
            aria="Spigot"
          />
          <Icon
            href="https://github.com/broccolai/tickets/wiki"
            icon={faBook}
            basis="1.4rem"
            backing={hexToRGBA(gray, 10)}
            aria="Github Wiki"
          />
          <Icon
            href="https://github.com/broccolai/tickets/"
            icon={faGithub}
            basis="1.4rem"
            backing={hexToRGBA(gray, 10)}
            aria="Github"
          />
          <Icon
            href="https://discord.gg/huYp67G"
            icon={faDiscord}
            basis="1.4rem"
            backing={hexToRGBA(gray, 10)}
            aria="Discord"
          /> */}
        </CardBottomBody>
        <FooterText>SERVING {amount()} DISCORD GUILDS</FooterText>
      </Card>
      <Card>
        <StyledCardHeader style={{[backgroundVariable.identifier]: 'url(\'MAGMOBG.png\')'}}>
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
          {/* <Icon
            href="https://github.com/broccolai/site"
            icon={faGithub}
            basis="1.4rem"
            backing={hexToRGBA(gray, 10)}
            aria="Github"
          />
          <Icon
            href="https://broccol.ai/"
            icon={faLink}
            basis="1.4rem"
            backing={hexToRGBA(gray, 10)}
            aria="Website URL"
          /> */}
        </CardBottomBody>
      </Card>
      <Card>
        {/* backing={fadeGradient(smoke, 15) + ", url('CORNBG.png')"} */}
        <StyledCardHeader style={{[backgroundVariable.identifier]: 'url(\'CORNBG.png\')'}}>
          {/* <LogoIcon icon={faPepperHot} /> */}
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
          {/* <Icon
            href="https://github.com/broccolai/corn"
            icon={faGithub}
            basis="1.4rem"
            backing={hexToRGBA(gray, 10)}
            aria="Github"
          /> */}
        </CardBottomBody>
      </Card>
    </Container>
  );
};

export default Intro;
