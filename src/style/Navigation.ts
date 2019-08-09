import styled from 'styled-components';
import { slider } from './tokens/keyframes';
import { darkModal } from './tokens/color';

const Navigation = styled.nav`
	display: flex;
	position: fixed;
	top: 3rem;
	left: -3rem;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	z-index: 2;
	animation: 1s ease-in-out 0s forwards ${slider};
	@media (max-width: 499px) {
		top: 3.9rem;
		left: 0;
		border-radius: 0 0.4rem 0.4rem 0;
		background-color: ${darkModal};
	}
`;

export default Navigation;
