import styled from 'styled-components';
import { h3 } from '../tokens/typography';
import { textShadow, textShadowDM } from '../tokens/ui';
import { white } from '../tokens/color';

const Title = styled.h2`
	margin: 1rem 0;
	width: fit-content;
	font: ${h3};
	color: ${white};
	user-select: none;
	align-self: flex-start;
	white-space: nowrap;
	@media (prefers-color-scheme: light) {
		text-shadow: ${textShadow};
	}
	@media (prefers-color-scheme: dark) {
		text-shadow: ${textShadowDM};
	}
`;

export default Title;
