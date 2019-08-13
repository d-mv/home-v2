import styled from 'styled-components';
import { shadow } from '../tokens/ui';
import { shadowDrop, stretch, shadowDropDM } from '../tokens/keyframes';

export interface MProps {
	image: string;
}

const Main = styled.article<MProps>`
	height: 75%;
	width: 100%;
	/* opacity: 0; */
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
	border-radius: 1rem;
	box-shadow: ${shadow};
	@media (prefers-color-scheme: light) {
		animation: ${shadowDrop} 0.5s ease-in-out 0s forwards,
			${stretch} 0.5s ease-in-out 0s forwards;
	}
	@media (prefers-color-scheme: dark) {
		animation: ${shadowDropDM} 0.5s ease-in-out 0s forwards,
			${stretch} 0.5s ease-in-out 0s forwards;
	}
`;

export default Main;
