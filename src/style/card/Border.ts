import styled from 'styled-components';
import { grey } from '../tokens/color';
import { stretch } from '../tokens/keyframes';

const Border = styled.div`
	height: 0.01rem;
	margin-top: -0.1rem;
	align-self: center;
	width: 100%;
	max-width: 0%;
	border-top: 0.2rem solid ${grey};
	animation: ${stretch} .5s ease-in-out 1s forwards;
`;

export default Border;
