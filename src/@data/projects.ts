import TicketsBackground from '@assets/projects/tickets/background.png';
import TicketsLogo from '@assets/projects/tickets/logo.svg';

export interface Project {
  title: string;
  slogan: string;
  images: ProjectImages;
}

export interface ProjectImages {
  background: ImageMetadata;
  logo: ImageMetadata;
}

const projects: Project[] = [
  {
    title: 'tickets',
    slogan: 'multiplatform ticketing',
    images: {
      background: TicketsBackground,
      logo: TicketsLogo,
    },
  },
];

export default projects;
