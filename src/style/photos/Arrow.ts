import styled from 'styled-components';
import { DefaultButton } from '../tokens/reset';
import { dark, white, whiteTrans } from '../tokens/color';
import { transition } from '../tokens/animation';

const Arrow = styled(DefaultButton)`
	padding: 0 0.5rem;
	border-radius: 0.4rem;
	transition: ${transition};
	svg {
		width: 2rem;
		height: 2rem;
	}
	&:first-of-type {
		margin-inline-start: -0.5rem;
		margin-inline-end: 0.5rem;
	}
	&:last-of-type {
		margin-inline-start: 0.5rem;
		margin-inline-end: -0.5rem;
	}
	@media (hover: hover) {
		@media (prefers-color-scheme: dark) {
			&:hover {
				background-color: ${whiteTrans};
				color: ${dark};
			}
		}
		@media (prefers-color-scheme: light) {
			&:hover {
				background-color: ${dark};
				color: ${white};
			}
		}
	}
`;

export default Arrow;
