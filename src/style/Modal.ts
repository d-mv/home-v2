import styled from 'styled-components';
import { darkModal } from './tokens/color';

const Modal = styled.div`
	position: fixed;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: ${darkModal};
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	z-index: 10;
`;

export default Modal;
