import { keyframes } from 'styled-components';

export const moveToRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  80% {
    opacity: 0.8;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const moveToLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  80% {
    opacity: 0.8;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;
