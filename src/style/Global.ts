import { createGlobalStyle } from 'styled-components';
import WebFont from 'webfontloader';
import { dark, white } from './tokens/color';
import { fontSans } from './tokens/typography';

WebFont.load({
	google: {
		families: ['Rubik:300,400,500', 'Roboto+Slab:300,400']
	}
});

const Global = createGlobalStyle`
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
