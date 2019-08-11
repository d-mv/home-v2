import React, { useState, useEffect } from 'react';
import Navigation from '../style/Navigation';
import { ModuleData } from '../types';
import { modules } from '../data/index';
import NavButton from './NavButton';
import { useSpring } from 'react-spring';

export const NavBar = (props: { module: string; onClick: (arg0: string) => void }) => {
	const [transform, setTransform] = useState('translateX(-100%)');

	useEffect(() => {
		setTimeout(() => setTransform('translateX(0)'), 1000);
	}, []);

	return (
		<Navigation
			id='navbar'
			style={useSpring({
				from: { transform: 'translateX(-100%)' },
				to: { transform }
			})}>
			{Object.entries(modules).map((value: [string, ModuleData]) => (
				<NavButton
					key={value[0]}
					active={value[1].title === props.module}
					module={value[1]}
					onClick={props.onClick}
				/>
			))}
		</Navigation>
	);
};
