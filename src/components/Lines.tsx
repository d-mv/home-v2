import React from 'react';

import Line from '../style/contact/Line';
import Label from '../style/contact/Label';
import Column from '../style/Column';
import { icons } from '../data';
import { Icon } from '../types';

const onClick = (url: string) => window.open(url, '_blank');

export const Lines = () => (
	<Column id='contact__column' width='40rem'>
		{icons.map((icon: Icon, index: number) => {
			console.log(index);
			return (
				<Line
					id={`contact__line_${icon.label.split(' ').join('-')}`}
					key={icon.label}
					delay={index * 0.3}
					onClick={() => onClick(icon.link)}
					justify='flex-start'>
					{icon.element}
					<Label>{icon.label}</Label>
				</Line>
			);
		})}
	</Column>
);
