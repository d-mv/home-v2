import styled from 'styled-components';
import { grey } from '../tokens/color';
import { animated } from 'react-spring';

const Border = styled(animated.div)`
	height: 0.01rem;
	margin-top: -0.1rem;
	align-self: center;
	width: 100%;
	max-width: 0%;
	border-top: 0.2rem solid ${grey};
`;

export default Border;
