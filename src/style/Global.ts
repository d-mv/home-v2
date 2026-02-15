import { createGlobalStyle } from "styled-components";
import { dark, white } from "./tokens/color";
import { fontSans } from "./tokens/typography";

const Global = createGlobalStyle`
  @font-face {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(/fonts/RobotoSlab-Light.ttf) format('truetype');
  }
  @font-face {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(/fonts/RobotoSlab-Regular.ttf) format('truetype');
  }
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(/fonts/Rubik-Light.ttf) format('truetype');
  }
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(/fonts/Rubik-Regular.ttf) format('truetype');
  }
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(/fonts/Rubik-Medium.ttf) format('truetype');
  }

  :root {
    font-size: 62.5%;
  }
  html {
  scroll-behavior: smooth;
  font-family: ${fontSans};
  -moz-osx-font-smoothing: grayscale;
  color: ${dark};
  background-color: ${white};
  @media (prefers-color-scheme: dark) {
    background-color:${dark};
    color: ${white};
  }
}
  body{
    margin:0;
  }

`;
export default Global;
