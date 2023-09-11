import type { IconTypes } from '@aminya/solid-icons';
import { FaBrandsDiscord, FaBrandsGithub, FaSolidBook, FaSolidFaucet, FaSolidLink } from '@aminya/solid-icons/fa';
import CornBackground from 'assets/projects/corn/background.png';
import CornLogo from 'assets/projects/corn/logo.png';
import SiteBackground from 'assets/projects/site/background.png';
import SiteLogo from 'assets/projects/site/logo.svg';
import TicketsBackground from 'assets/projects/tickets/background.png';
import TicketsLogo from 'assets/projects/tickets/logo.svg';

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
  glyph: IconTypes;
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
        glyph: FaSolidFaucet,
        aria: 'Spigot',
      },
      {
        link: 'https://github.com/broccolai/tickets/wiki',
        glyph: FaSolidBook,
        aria: 'Github Wiki',
      },
      {
        link: 'https://github.com/broccolai/tickets/',
        glyph: FaBrandsGithub,
        aria: 'Github',
      },
      {
        link: 'https://discord.gg/huYp67G',
        glyph: FaBrandsDiscord,
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
        glyph: FaBrandsGithub,
        aria: 'Github',
      },
      {
        link: 'https://broccol.ai',
        glyph: FaSolidLink,
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
        glyph: FaBrandsGithub,
        aria: 'Github',
      },
    ],
  },
];

export default projects;
