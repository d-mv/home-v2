import styled from 'styled-components';
import { p } from '../tokens/typography';
import { white } from '../tokens/color';
import { textShadow, textShadowDM } from '../tokens/ui';
import {appear } from '../tokens/keyframes';

const Description = styled.article`
	font: ${p};
	color: ${white};
	letter-spacing: 0.1rem;
	user-select: none;
	overflow: hidden;
	line-height: 2.2rem;
	overflow: auto;
	opacity: 0;
	animation: ${appear} 1s ease-in-out 0s forwards;
	@media (prefers-color-scheme: light) {
		text-shadow: ${textShadow};
	}
	@media (prefers-color-scheme: dark) {
		text-shadow: ${textShadowDM};
	}
	@media (max-height: 700px) {
		font-size: 1.4rem;
	}
	@media (max-height: 600px) {
		font-size: 1.3rem;
	}
	@media (max-height: 560px) {
		font-size: 1.2rem;
	}
	@media (max-height: 470px) {
		font-size: 1.1rem;
	}
`;

export default Description;
