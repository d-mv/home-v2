import styled from 'styled-components';
import { DefaultParagraph } from '../tokens/reset';
import { shadowPlank, textShadow, shadowPlankDM } from '../tokens/ui';
import { dark, lightGrey, accent } from '../tokens/color';
import { appear } from '../tokens/keyframes';

export interface LProps {
	delay: number;
	justify?: string;
}

const Line = styled(DefaultParagraph)<LProps>`
	width: 100%;
	display: flex;
	padding: 1rem 2rem;
	margin: 0.5rem 0;
	opacity: 0;
	justify-content: ${props => (props.justify ? props.justify : 'center')};
	align-items: center;
	border-radius: 0.4rem;
	background-color: ${lightGrey};
	border-bottom: 2px solid ${lightGrey};
	animation-duration: 1s;
	animation-fill-mode: forwards;
	animation-name: ${appear};
	animation-delay: ${props => `${props.delay}s`};
	cursor: pointer;
	svg {
		color: ${dark};
		height: 3rem;
		width: 3rem;
		text-shadow: ${textShadow};
	}

	@media (prefers-color-scheme: dark) and (min-width: 500px) {
		&:hover {
			border-bottom: 2px solid ${accent};
			box-shadow: ${shadowPlankDM};
		}
	}
	@media (prefers-color-scheme: light) and (min-width: 500px) {
		&:hover {
			border-bottom: 2px solid ${dark};
			box-shadow: ${shadowPlank};
		}
	}
	@media (prefers-color-scheme: dark) and (max-width: 499px) {
		&:active {
			border-bottom: 2px solid ${accent};
			box-shadow: ${shadowPlankDM};
		}
	}
	@media (prefers-color-scheme: light) and (max-width: 499px) {
		&:active {
			border-bottom: 2px solid ${dark};
			box-shadow: ${shadowPlank};
		}
	}
`;

export default Line;
