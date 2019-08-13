import styled from 'styled-components';

export interface CProps {
	height?: string;
	modalIsOpen: boolean;
}

const Content = styled.div<CProps>`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	height: inherit;
	overflow: ${props => (props.modalIsOpen ? 'hidden' : undefined)};
`;

export default Content;
