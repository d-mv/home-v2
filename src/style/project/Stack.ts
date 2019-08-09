import styled from 'styled-components';
import { whiteTrans } from '../tokens/color';
import { growUp } from '../tokens/keyframes';

const Stack = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: center;
	margin: 1rem 0;
	user-select: none;
	padding: 1rem;
	border-radius: 0.3rem;
	background-color: ${whiteTrans};
	animation-delay: 0s;
	animation-duration: 7s;
	animation-fill-mode: forwards;
	animation-name: ${growUp};
	div {
		margin: 0.5rem;
		&:first-of-type {
			margin: 0;
		}
	}
`;

export default Stack;
