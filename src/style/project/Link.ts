import styled from 'styled-components';
import { white, grey, dark } from '../tokens/color';
import { link } from '../tokens/typography';
import { textShadow, textShadowDM } from '../tokens/ui';

const Link = styled.a`
	cursor: pointer;
	color: ${white};
	font: ${link};
	letter-spacing: 0.5rem;
	text-shadow: ${textShadow};
	margin: 0.5rem 1rem;
	text-transform: uppercase;
	padding: 1rem;
	border-width: 1px;
	border-style: solid;
	border-radius: 0.7rem;

	@media (prefers-color-scheme: light) {
		border-color: ${dark};
		text-shadow: ${textShadow};
	}
	@media (prefers-color-scheme: dark) {
		border-color: ${grey};
		text-shadow: ${textShadowDM};
	}
	@media (max-height: 700px) {
		font-size: 1rem;
		padding: 1rem;
	}
	@media (max-height: 600px) {
		font-size: 0.8rem;
		padding: 0.8rem;
	}
	@media (max-height: 560px) {
		font-size: 0.7rem;
		padding: 0.7rem;
	}
	@media (max-height: 470px) {
		font-size: 0.6rem;
		padding: 0.6rem;
	}
`;

export default Link;
