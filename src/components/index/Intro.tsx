import { styled } from '@panda/jsx';

import { For } from 'solid-js';
import projects from '@data/projects';
import { ChildFlexSection } from '../global/Containers';
import { H3 } from '../global/Typography';
import ProjectCard from './ProjectCard';

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

const Intro = () => (
  <Container>
    <Title>PROJECTS</Title>
    <For each={projects}>{(project) => <ProjectCard project={project} />}</For>
  </Container>
);

export default Intro;
