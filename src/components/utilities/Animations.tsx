import { keyframes } from '@macaron-css/core';

export const Pound = keyframes({
  '0': {
    transform: 'scale(1)',
  },

  '100': {
    transform: 'scale(1.1)',
  },
});

export const animStar0 = keyframes({
  '0%': {
    transform: 'translateY(0) translateX(0) rotate(0deg)',
  },

  '50%': {
    transform: 'translateX(5vw) rotate(-2deg)',
  },

  '100%': {
    transform: 'translateY(5vh) translateX(-5vw) rotate(2deg)',
  },
});

export const animStar1 = keyframes({
  '0%': {
    transform: 'translateY(0) translateX(0) rotate(0deg)',
  },

  '50%': {
    transform: 'translateX(5vw) rotate(-3deg)',
  },

  '100%': {
    transform: 'translateY(20vh) translateX(-5vw) rotate(3deg)',
  },
});

export const animStar2 = keyframes({
  '0%': {
    transform: 'translateY(0) translateX(0) rotate(0deg)',
  },

  '50%': {
    transform: 'translateX(-8vw) rotate(2deg)',
  },

  '100%': {
    transform: 'translateY(15vh) translateX(8vw) rotate(-2deg)',
  },
});
