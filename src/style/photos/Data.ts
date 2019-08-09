import styled from 'styled-components';
import { black30, white } from '../tokens/color';

const Data = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-self: flex-end;
	background-color: ${black30};
	color: ${white};
	padding: 0.5rem 0;
	border-radius: 0 0 1rem 1rem;
  /* box-shadow */
`;

export default Data;
