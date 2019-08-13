import styled from 'styled-components';
import { DefaultButton } from '../tokens/reset';
import { textButton } from '../tokens/typography';
import { whiteTrans } from '../tokens/color';
import { textShadow } from '../tokens/ui';

const Close = styled(DefaultButton)`
	font: ${textButton};
	color: ${whiteTrans};
	text-shadow: ${textShadow};
	&:hover {
		color: white;
	}
	&:active {
		color: white;
		transform: scale(0.97);
	}
`;

export default Close;
