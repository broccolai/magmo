import { keyframes } from "styled-components";

export const shake = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

export const colors = keyframes` 
	0% { background-position: 0% 50% }
	50% { background-position: 100% 50% }
	100% { background-position: 0% 50% }
`;

export const Pound = keyframes`
  from {
    transform: scale(1)
  }

  to {
    transform: scale(1.1)
  }
`;

export const LogoMove = keyframes`
  0% {
    background: whitesmoke;    
    transform: translateX(0);
  }

  50% {
    background: whitesmoke;    
  }

  100% {
    background: transparent;
    transform: translateX(-25vw);
  }
`;

export const LogoMoveUp = keyframes`
  0% {
    background: whitesmoke;    
    transform: translateY(0);
  }

  50% {
    background: whitesmoke;    
  }

  100% {
    background: transparent;    
    transform: translateY(10vh);
  }
`;

export const TextMove = keyframes`
  from {
    letter-spacing: 0px;
    transform: translateX(0);
  }

  to {
    letter-spacing: 6px;
    transform: translateX(25vw);
  }
`;

export const TextMoveUp = keyframes`
  from {
    letter-spacing: 0px;
    transform: translateY(0);
  }

  to {
    letter-spacing: 10px;
    transform: translateY(-20vh);
  }
`;

export const animStar0 = keyframes`
  0% {
      transform: translateY(0) translateX(0) rotate(0deg)
  }

  50% {
      transform: translateX(5vw) rotate(-2deg)
  }

  100% {
    transform: translateY(5vh) translateX(-5vw) rotate(2deg)
  }
`;

export const animStar1 = keyframes`
  0% {
      transform: translateY(0) translateX(0) rotate(0deg)
  }

  50% {
      transform: translateX(5vw) rotate(-3deg)
  }

  100% {
    transform: translateY(20vh) translateX(-5vw) rotate(3deg)
  }
`;

export const animStar2 = keyframes`
  0% {
      transform: translateY(0) translateX(0) rotate(0deg)
  }

  50% {
      transform: translateX(-8vw) rotate(2deg)
  }

  100% {
    transform: translateY(15vh) translateX(8vw) rotate(-2deg)
  }
`;