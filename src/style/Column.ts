import styled from 'styled-components';

export interface CProps {
	width?: string;
	justify?: string;
	minWidth?: string;
}

const Column = styled.section<CProps>`
	display: flex;
	flex-direction: column;
	justify-content: ${props => (props.justify ? props.justify : 'center')};
	align-items: center;
	width: ${props => (props.width ? props.width : undefined)};
	min-width: ${props => (props.minWidth ? props.minWidth : undefined)};
	height: 100%;
	padding: 1rem;
	margin: 0 1rem;
	@media (max-width: 999px) {
		width: 80%;
	}
	@media (max-width: 899px) {
		width: 90%;
	}
	@media (max-width: 699px) {
		width: 100%;
		height: inherit;
	}
`;

export default Column;
