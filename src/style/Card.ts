import styled from 'styled-components';
import { shadowActive, shadowHover } from './tokens/ui';
import { white, accent } from './tokens/color';
import { transition } from './tokens/animation';
import { shadowDrop, shadowDropDM } from './tokens/keyframes';

const Card = styled.article`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	background-color: ${white};
	border-radius: 0.7rem;
	@media (prefers-color-scheme: light) {
		animation: ${shadowDrop} 1s ease-in-out 0s forwards;
	}
	@media (prefers-color-scheme: dark) {
		animation: ${shadowDropDM} 1s ease-in-out 0s forwards;
	}
	margin: 2rem;
	width: 30rem;
	filter: grayscale(1);
	transition: ${transition};
	&:hover {
		filter: grayscale(0);
		transform: scale(1.01);
		box-shadow: ${shadowHover};
		div {
			border-color: ${accent};
		}
	}
	&:active {
		transform: scale(0.99);
		box-shadow: ${shadowActive};
	}
`;

export default Card;
