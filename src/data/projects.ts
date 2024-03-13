import CornBackground from 'src/assets/projects/corn/background.png';
import CornLogo from 'src/assets/projects/corn/logo.png';
import SiteBackground from 'src/assets/projects/site/background.png';
import SiteLogo from 'src/assets/projects/site/logo.svg';
import TicketsBackground from 'src/assets/projects/tickets/background.png';
import TicketsLogo from 'src/assets/projects/tickets/logo.svg';

export interface Project {
  title: string;
  slogan: string;
  description: string;
  images: ProjectImages;
  icons: ProjectGlyph[];
}

export interface ProjectImages {
  background: ImageMetadata;
  logo: ImageMetadata;
}

export interface ProjectGlyph {
  link: string;
  aria: string;
}

const projects: Project[] = [
  {
    title: 'tickets',
    slogan: 'multiplatform ticketing',
    description:
      'Pure Tickets is a ticket management plugin made for Spigot / Paper. Its features include; players being able to submit multiple tickets and discord integeration',
    images: {
      background: TicketsBackground,
      logo: TicketsLogo,
    },
    icons: [
      {
        link: 'https://www.spigotmc.org/resources/pure-tickets-easy-to-use-ticket-system.71677/',
        aria: 'Spigot',
      },
      {
        link: 'https://github.com/broccolai/tickets/wiki',
        aria: 'Github Wiki',
      },
      {
        link: 'https://github.com/broccolai/tickets/',
        aria: 'Github',
      },
      {
        link: 'https://discord.gg/huYp67G',
        aria: 'Discord',
      },
    ],
  },
  {
    title: 'broccol.ai',
    slogan: 'astro/solidjs site',
    description:
      'broccol.ai is a nextjs site build with styled-components that I use to practice react and to store api endpoints for my other projects',
    images: {
      background: SiteBackground,
      logo: SiteLogo,
    },
    icons: [
      {
        link: 'https://github.com/broccolai/site',
        aria: 'Github',
      },
      {
        link: 'https://broccol.ai',
        aria: 'Website',
      },
    ],
  },
  {
    title: 'corn',
    slogan: 'java library',
    description:
      'corn is a extremely opinionated Java library that is mostly for my personal use, it currently has a core and a spigot module',
    images: {
      background: CornBackground,
      logo: CornLogo,
    },
    icons: [
      {
        link: 'https://github.com/broccolai/corn',
        aria: 'Github',
      },
    ],
  },
];

export default projects;
