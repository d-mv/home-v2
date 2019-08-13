import styled from 'styled-components';
import { darkModal } from './tokens/color';
import { unHide, appear } from './tokens/keyframes';

export interface NProps {
	mobile: boolean;
}

const Navigation = styled.nav<NProps>`
	display: flex;
	position: fixed;
	top: 3rem;
	left: -3rem;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	z-index: 2;
	transform: translateX(-100%);
	animation-duration: 0.5s;
	animation-fill-mode: forwards;
	animation-name: ${unHide}, ${appear};
	animation-delay: ${props => (props.mobile ? '0s' : '1s')};

	@media (max-width: 499px) {
		top: 3.9rem;
		left: 0;
		border-radius: 0 0.4rem 0.4rem 0;
		background-color: ${darkModal};
	}
`;

export default Navigation;
