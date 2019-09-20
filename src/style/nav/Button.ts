import styled from 'styled-components';
import { h1 } from '../tokens/typography';
import { DefaultButton } from '../tokens/reset';
import { transitionSlow } from '../tokens/animation';
import { accent, dark, white80, white } from '../tokens/color';

export interface BProps {
	margin?: string;
	active: boolean;
}
const Button = styled(DefaultButton)<BProps>`
	font: ${h1};
	padding: 2rem 1rem;
	background-color: transparent;
	transform: rotate(-90deg);
	transition: ${transitionSlow};
	cursor: pointer;
	outline: none;
	color: ${props => (props.active ? accent : undefined)} !important;
	@media (hover: hover) and (min-width: 500px) {
		&:hover {
			transform: none;
			height: 80%;
			width: 250%;
			padding-left: 10rem;
			padding-right: 2rem;
			color: ${dark};
			background-color: ${white80};
			border-radius: 0 0.4rem 0.4rem 0;
		}
	}
	@media (max-width: 499px) {
		padding: 1rem;
		transform: none;
		color: ${white};
	}
`;

export default Button;
