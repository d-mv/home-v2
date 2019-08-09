import styled from 'styled-components';
import { h3 } from '../tokens/typography';
import { textShadow } from '../tokens/ui';
import { white } from '../tokens/color';

const Title = styled.h2`
	margin: 1rem 0;
	width: fit-content;
	font: ${h3};
	text-shadow: ${textShadow};
	color: ${white};
	user-select: none;
	align-self: flex-start;
	white-space: nowrap;
`;

export default Title;
