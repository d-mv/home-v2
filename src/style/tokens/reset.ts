import styled from 'styled-components';
import { animated } from 'react-spring';
import { dark, white } from './color';

export const DefaultButton = styled(animated.button)`
	appearance: none;
	background: none;
	padding: 0;
	margin: 0;
	border-width: 0;
	text-align: center;
	cursor: pointer;
	outline: none;
	color: ${dark};
	@media (prefers-color-scheme: dark) {
		color: ${white};
	}
`;

export const DefaultParagraph = styled.p`
	margin: 0;
	padding: 0;
	margin-block-start: 0;
	margin-block-end: 0;
	color: ${dark};
	@media (prefers-color-scheme: dark) {
		color: ${white};
	}
`;
