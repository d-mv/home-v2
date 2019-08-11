import styled from 'styled-components';
import { DefaultButton } from './tokens/reset';
import { h4 } from './tokens/typography';
import { grey, white } from './tokens/color';
import { textShadow } from './tokens/ui';

export interface LProps {
	status: boolean;
}

const Logo = styled(DefaultButton)<LProps>`
	position: fixed;
	left: 0.5rem;
	top: 0.8rem;
	padding: 0.2rem;
	z-index: 5;
	user-select: none;
	background-color: rgba(0, 0, 0, 0);
	text-decoration: ${props => (props.status ? 'none' : 'underline')};
	font: ${h4};
	color: ${grey};
	text-shadow: ${textShadow};
	&::before {
		content: '';
		z-index: -1;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: ${grey};
		transform-origin: center bottom;
		transform: scaleY(0);
		transition: transform 0.7s ease-in-out;
	}
	@media (hover: hover) {
		&:hover {
			text-shadow: none;
			color: ${white};
			cursor: pointer;
			&::before {
				transform-origin: center top;
				transform: scaleY(1);
			}
		}
	}
`;
export default Logo;
