import styled from 'styled-components';

export interface CProps {
	height?: string;
}

const Content = styled.div<CProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	height: ${props => (props.height ? props.height : undefined)};
	@media (min-width: 800px) {
		flex-direction: row;
		flex-wrap: wrap;
	}
	@media (max-width: 799px) {
		flex-direction: column-reverse;
	}
`;

export default Content;
