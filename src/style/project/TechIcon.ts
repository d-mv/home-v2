import styled from 'styled-components';
import { appear } from '../tokens/keyframes';

export interface TIProps {
	image: string;
	delay: number;
}

const TechIcon = styled.div<TIProps>`
	height: 2.8rem;
	width: 2.8rem;
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
	@media (max-height: 700px) {
		height: 2.3rem;
		width: 2.3rem;
	}
	@media (max-height: 600px) {
		height: 2.1rem;
		width: 2.1rem;
	}
	@media (max-height: 560px) {
		height: 1.9rem;
		width: 1.9rem;
	}
	@media (max-height: 470px) {
		height: 1.5rem;
		width: 1.5rem;
	}
`;

export default TechIcon;
