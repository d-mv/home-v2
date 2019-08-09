import styled from 'styled-components';
import { accent } from './color';

export const transition = `all 0.3s cubic-bezier(0.42,0,0.58,1)`;
export const transitionSlow = `all .7s cubic-bezier(0.42,0,0.58,1)`;

export interface UProps {
	color?: string;
}

export const Underline = styled.span<UProps>`
	position: relative;
	&::before {
		content: '';
		position: absolute;
		left: 50%;
		bottom: 0;
		width: 100%;
		height: 2px;
		background-color: ${props => (props.color ? props.color : accent)};
		@media (prefers-color-scheme: dark) {
			background-color: ${accent};
		}
		transform-origin: center;
		transform: translate(-50%, 0) scaleX(0);
		transition: transform 0.3s ease-in-out;
	}
	&:hover::before {
		transform: translate(-50%, 0) scaleX(1);
	}
`;
