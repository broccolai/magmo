import { styled } from '@panda/jsx';
import { For } from 'solid-js';
import { FlexSection } from '../global/containers.tsx';
import projects from 'src/data/projects.ts';
import ProjectCard from './project-card';

const Container = styled(FlexSection, {
  base: {
    display: 'flex',
    background: 'cyan',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
    overflowY: 'scroll',
  },
});

const Intro = () => (
<<<<<<< Updated upstream
  <Container />
=======
  <Container>
    <For each={projects}>{(project) => <ProjectCard project={project} />}</For>
  </Container>
>>>>>>> Stashed changes
);

export default Intro;
