import styled from 'styled-components';

export interface CProps {
	height?: string;
}

const Content = styled.div<CProps>`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	height: inherit;
`;

export default Content;
