import styled from 'styled-components';
import { grey } from '../tokens/color';
import { wide } from '../tokens/keyframes';

const Border = styled.div`
	height: 0.01rem;
  margin-top:-0.1rem;
	align-self: center;
	width: 100%;
	max-width: 0%;
	border-top: 0.2rem solid ${grey};
	animation: ${wide} 1s ease-in-out 0s forwards;
`;

export default Border;
