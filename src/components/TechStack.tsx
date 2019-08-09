import React from 'react';
import Stack from '../style/project/Stack';
import TechIcon from '../style/project/TechIcon';
import { data } from '../data/index';

export const TechStack = (props: { technology: string[] }): JSX.Element => (
	<Stack id='modal__stack'>
		{props.technology.map((el: string, index: number) => (
			<TechIcon
				key={index}
				id='modal__stack_tech-icon'
				image={data.technology[el][0]}
				delay={index * 0.5}
			/>
		))}
	</Stack>
);
