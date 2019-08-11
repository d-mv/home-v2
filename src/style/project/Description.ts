import styled from 'styled-components';
import { p } from '../tokens/typography';
import { white } from '../tokens/color';
import { textShadow } from '../tokens/ui';
import { animated } from 'react-spring';

const Description = styled(animated.article)`
	font: ${p};
	color: ${white};
	text-shadow: ${textShadow};
	letter-spacing: 0.1rem;
	user-select: none;
	max-height: 70%;
	overflow: hidden;
	line-height: 2.2rem;
	overflow:auto;
	@media (max-height: 700px) {
		font-size: 1.4rem;
	}
	@media (max-height: 600px) {
		font-size: 1.3rem;
	}
	@media (max-height: 560px) {
		font-size: 1.2rem;
	}
	@media (max-height: 470px) {
		font-size: 1.1rem;
	}
`;

export default Description;
