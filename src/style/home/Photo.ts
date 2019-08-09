import styled from 'styled-components';
import { scale, shadowDrop } from '../tokens/keyframes';
import { shadowHover } from '../tokens/ui';

export interface PProps {
	image: string;
}

const Photo = styled.div<PProps>`
	height: ${`${window.innerHeight / 12}rem`};
	width: 70%;
	background: rgba(0, 0, 0, 0) url(${props => props.image}) no-repeat scroll center center /
		cover;
	background-color: white;
	background-size: cover;
	user-select: none;
	background-color: rgba(0, 0, 0, 0);
	border-radius: 1rem;
	filter: grayscale(1);
	@media (prefers-color-scheme: light) {
		animation: ${shadowDrop} 1s ease-in-out 0s forwards,
			${scale} 1s ease-in-out 0s forwards;
		&:hover {
			box-shadow: ${shadowHover};
		}
	}
	&:hover {
		filter: grayscale(0);
	}
	@media (max-width: 999px) {
		width: 80%;
	}
	@media (max-width: 899px) {
		width: 90%;
	}
	@media (max-width: 699px) {
		width: 100%;
	}
	@media (max-width: 649px) {
		width: 50%;
	}
	@media (max-width: 599px) {
		width: 60%;
	}
	@media (max-width: 499px) {
		width: 70%;
	}
	@media (max-width: 399px) {
		width: 80%;
	}
	@media (max-width: 349px) {
		width: 100%;
	}
`;

export default Photo;
