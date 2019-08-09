import React from 'react';
import Arrow from '../style/photos/Arrow';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

export const ArrowButton = (props: {
	left?: boolean;
	right?: boolean;
	onClick: (arg0: string) => void;
}) => (
	<Arrow
		id={`photos__belt_arrow-${props.left ? 'left' : 'right'}`}
		onClick={() => props.onClick(props.left ? 'minus' : 'plus')}>
		{props.left ? <FaAngleLeft /> : <FaAngleRight />}
	</Arrow>
);
