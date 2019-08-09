import React from 'react';
import Navigation from '../style/Navigation';
import { ModuleData } from '../types';
import { modules } from '../data/index';
import NavButton from './NavButton';

export const NavBar = (props: { module: string; onClick: (arg0: string) => void }) => (
	<Navigation id='navbar'>
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
