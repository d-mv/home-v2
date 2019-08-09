import styled from 'styled-components';
import { appear } from '../tokens/keyframes';

export interface TIProps {
	image: string;
	delay: number;
}

const TechIcon = styled.div<TIProps>`
	height: 3rem;
	width: 3rem;
	opacity: 0;
	background: rgba(0, 0, 0, 0) url(${props => props.image}) no-repeat scroll center center /
		contain;
	background-color: white;
	background-size: contain;
	object-fit: contain;
	user-select: none;
	background-color: rgba(0, 0, 0, 0);
	animation-delay: ${props => `${props.delay}s`};
	animation-duration: 3s;
	animation-fill-mode: forwards;
	animation-name: ${appear};
`;

export default TechIcon;
