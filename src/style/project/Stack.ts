import styled from 'styled-components';
import { whiteTrans } from '../tokens/color';
import { animated } from 'react-spring';

const Stack = styled(animated.div)`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: center;
	margin: 0 0 1rem 0;
	user-select: none;
	padding: 1rem;
	border-radius: 0.3rem;
	background-color: ${whiteTrans};
	div {
		margin: 0.5rem;
		&:first-of-type {
			margin: 0;
		}
	}
`;

export default Stack;
