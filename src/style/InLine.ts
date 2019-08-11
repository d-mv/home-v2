import styled from 'styled-components';
import { animated } from 'react-spring';

export interface ILProps {
	width?: string;
	margin?: string;
}

const InLine = styled(animated.span)<ILProps>`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	width: ${props => (props.width ? props.width : '100%')};
	margin: ${props => (props.margin ? props.margin : undefined)};
	flex-wrap: nowrap;
	align-items: center;
`;

export default InLine;
