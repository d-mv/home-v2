import styled from 'styled-components';
import { appear } from '../tokens/keyframes';

export interface PProps {
	image: string;
}

const Photo = styled.div<PProps>`
	height: 100%;
	width: 100%;
	background: rgba(0, 0, 0, 0) url(${props => props.image}) no-repeat scroll center center /
		contain;
	background-color: white;
	background-size: contain;
	user-select: none;
	background-color: rgba(0, 0, 0, 0);
  opacity:0;
	animation: ${appear} 1.5s ease-in-out 1s forwards;
`;

export default Photo;
