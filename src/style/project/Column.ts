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
	@media (max-width: 719px) {
		width: 90%;
		margin: 0 2.5%;
	}
`;

export default Column;
