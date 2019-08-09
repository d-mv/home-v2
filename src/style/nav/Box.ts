import styled from 'styled-components';

export interface BProps {
	height?: number;
}

const Box = styled.div<BProps>`
	width: 10rem;
	height: ${props => (props.height ? `${props.height}rem` : '12rem')};
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 499px) {
		width: 13rem;
		height: 5rem;
		justify-content: flex-start;
	}
`;

export default Box;
