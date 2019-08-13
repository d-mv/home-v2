import styled from 'styled-components';
import { whiteTrans } from '../tokens/color';
import { appear } from '../tokens/keyframes';

const Stack = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	margin: 0 0 1rem 0;
	user-select: none;
	padding: 1rem;
	border-radius: 0.3rem;
	background-color: ${whiteTrans};
	opacity: 0;
	animation: ${appear} 0.3s ease-in-out 0s forwards;
	width:fit-content;
	div {
		margin: 0.5rem;
		&:first-of-type {
			margin: 0;
		}
	}
`;

export default Stack;
