import { styled } from '@panda/jsx';
import type { Project } from '@data/projects';
import { Card, CardBody, CardBottomBody, CardHeader } from '../individuals/card';
import Icon from '../individuals/icon';
import { FaBrandsDiscord, FaBrandsGithub, FaSolidBook, FaSolidFaucet } from '@aminya/solid-icons/fa';
import { Bold, H3, H4, Text } from '../global/Typography';
import { createVariable } from '../utilities/Functions';

const projectCardBackground = createVariable('project-card-background');

const StyledCardHeader = styled(CardHeader, {
  base: {
    backgroundImage: `var(--project-card-background)`,
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
    color: 'gray',
    fontSize: '1rem !important',
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

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  const { title, slogan, images } = project;
  const { background, logo } = images;

  return (
    <Card style={{ [projectCardBackground.identifier]: `url(${background.src})` }}>
      <StyledCardHeader>
        <Logo style={{ [projectCardBackground.identifier]: `url(${background.src})` }} />
        <Name>{title}</Name>
        <Slogan>{slogan}</Slogan>
      </StyledCardHeader>
      <CardBody>
        <Bold>ABOUT</Bold>
        <Text color="gray">
          Pure Tickets is a ticket management plugin made for Spigot / Paper. Its features include; players being able
          to submit multiple tickets and discord integeration
        </Text>
      </CardBody>
      <CardBottomBody>
        <Icon
          href="https://www.spigotmc.org/resources/pure-tickets-easy-to-use-ticket-system.71677/"
          Glyph={FaSolidFaucet}
          basis="1.4rem"
          backing="grey"
          aria="Spigot"
        />
        <Icon
          href="https://github.com/broccolai/tickets/wiki"
          Glyph={FaSolidBook}
          basis="1.4rem"
          backing="grey"
          aria="Github Wiki"
        />
        <Icon
          href="https://github.com/broccolai/tickets/"
          Glyph={FaBrandsGithub}
          basis="1.4rem"
          backing="grey"
          aria="Github"
        />
        <Icon href="https://discord.gg/huYp67G" Glyph={FaBrandsDiscord} basis="1.4rem" backing="gray" aria="Discord" />
      </CardBottomBody>
    </Card>
  );
};

export default ProjectCard;
