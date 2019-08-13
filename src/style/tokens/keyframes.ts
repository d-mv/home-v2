import { keyframes } from 'styled-components';
import { shadow, shadowDM } from './ui';


export const stretch = keyframes`
0% { max-width: 0% }
100% { max-width: 100% }
`;
export const stretch95 = keyframes`
0% { max-width: 0% }
100% { max-width: 95% }
`;

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

export const fontTo18 = keyframes`
0%{font-size: 0}
100% {font-size:1.8rem}
`;

export const appear = keyframes`
0% {opacity:0}
100% {opacity:1}
`;

export const unHide = keyframes`
0% { transform: translateX(-100%)}
100% { transform: translateX(0%) }
`;
