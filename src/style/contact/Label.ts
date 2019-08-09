import styled from 'styled-components';
import { contact } from '../tokens/typography';
import { dark } from '../tokens/color';
import { textShadow } from '../tokens/ui';

const Label = styled.span`
	margin-inline-start: 2rem;
	font: ${contact};
	color: ${dark};
	text-shadow: ${textShadow};
`;

export default Label;
