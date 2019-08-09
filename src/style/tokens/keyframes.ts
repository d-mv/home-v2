import { keyframes } from 'styled-components';
import { shadow, shadowDM } from './ui';

export const shadowDrop = keyframes`
 0% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100%  {
    box-shadow:${shadow};
  }
`;
export const shadowDropDM = keyframes`
 0% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100%  {
    box-shadow:${shadowDM};
  }
`;
export const appear = keyframes`
  0% {
opacity:0
  }
  100% {
opacity:1
  }
`;
export const growUp = keyframes`
  0% {
max-height:0
  }
  100% {
max-height:100%;
  }
`;
export const wide = keyframes`
  0% {
max-width:0
  }
  100% {
max-width:100%;
  }
`;
export const scale = keyframes`  0% {
transform:scale(0.9)
  }
  100% {
transform:scale(1)
  }`;
export const slider = keyframes`
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }`;
