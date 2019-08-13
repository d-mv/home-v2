import styled from 'styled-components';
import {stretch95 } from './tokens/keyframes';
export interface ILProps {
	width?: string;
	margin?: string;
}

const InLine = styled.span<ILProps>`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	width: ${props => (props.width ? props.width : '100%')};
	margin: ${props => (props.margin ? props.margin : undefined)};
	flex-wrap: nowrap;
	align-items: center;
	max-width: 0;
	/* height: inherit; */
	animation: ${stretch95} 0.5s ease-in-out 0s forwards;
`;

export default InLine;
