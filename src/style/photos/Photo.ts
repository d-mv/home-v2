import styled from 'styled-components';
import { appear } from '../tokens/keyframes';
import { shadow, shadowActive } from '../tokens/ui';
import { transition } from '../tokens/animation';
import { animated } from 'react-spring';

export interface PProps {
	image: string;
}

const Photo = styled(animated.div)<PProps>`
	height: 100%;
	width: 100%;
	opacity: 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-end;
	background: rgba(0, 0, 0, 0) url(${props => props.image}) no-repeat scroll center center /
		cover;
	background-color: white;
	background-size: cover;
	user-select: none;
	background-color: rgba(0, 0, 0, 0);
	box-shadow: ${shadow};
	animation: ${appear} 1s ease-in-out 0.5s forwards;
	transition: ${transition};
	&:first-of-type {
		margin-left: 0;
	}
	&:last-of-type {
		margin-right: 0;
	}
	&:hover {
		filter: grayscale(0);
	}
	&:active {
		box-shadow: ${shadowActive};
	}
	@media (min-width: 500px) {
		border-radius: 0.4rem;
		margin: 0 1rem;
		filter: grayscale(1);
		&:active {
			transform: scale(1.03);
		}
	}
`;

export default Photo;
