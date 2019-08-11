import React from 'react';
import Box from '../style/nav/Box';
import { ModuleData } from '../types';
import Button from '../style/nav/Button';

export interface NBPRops {
	mobile?: boolean;
	module: ModuleData;
	active: boolean;
	onClick: (arg0: string) => void;
}

const NavButton = (props: NBPRops) => (
	<Box
		id={`navbar__box_${props.module.title}`}
		height={props.module.title === 'HOME' && !props.mobile ? 10 : undefined}>
		<Button
			id='navbar__button'
			active={props.active}
			margin={props.module.margin}
			onClick={() => props.onClick(props.module.title)}>
			{props.module.title}
		</Button>
	</Box>
);

export default NavButton;
