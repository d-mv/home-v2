import styled from 'styled-components';
import { shadowActive, shadowHover } from './tokens/ui';
import { white, accent } from './tokens/color';
import { transition } from './tokens/animation';
import { shadowDrop, shadowDropDM } from './tokens/keyframes';

const Card = styled.article`
	background-color: ${white};
	border-radius: 0.7rem;
	display: flex;
	filter: grayscale(1);
	flex-direction: column;
	flex-wrap: nowrap;
	margin: 2rem;
	transition: ${transition};
	width: 30rem;

	@media (min-width: 500px) {
		&:hover {
			filter: grayscale(0);
			transform: scale(1.01);
			box-shadow: ${shadowHover};
			div {
				border-color: ${accent};
			}
		}
	}

	&:active {
		transform: scale(0.99);
		box-shadow: ${shadowActive};
	}

	@media (prefers-color-scheme: light) {
		animation: ${shadowDrop} 0.5s ease-in-out 0s forwards;
	}
	@media (prefers-color-scheme: dark) {
		animation: ${shadowDropDM} 0.5s ease-in-out 0s forwards;
	}
`;

export default Card;
