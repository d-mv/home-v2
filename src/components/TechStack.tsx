import React from 'react';
import Stack from '../style/project/Stack';
import TechIcon from '../style/project/TechIcon';
import { data } from '../data/index';
import { useSpring } from 'react-spring';

export const TechStack = (props: { technology: string[] }): JSX.Element => {
	return (
		<Stack
			id='modal__stack'
			style={useSpring({ from: { maxHeight: '0%' }, to: { maxHeight: '100%' } })}>
			{props.technology.map((el: string, index: number) => (
				<TechIcon
					key={index}
					id='modal__stack_tech-icon'
					image={data.technology[el][0]}
					delay={index * 0.1}
				/>
			))}
		</Stack>
	);
};
