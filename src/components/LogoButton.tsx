import React from 'react';
import Logo from '../style/Logo';

export const LogoButton = (props: {
	status: boolean;
	onClick: (arg0: boolean) => void;
}) => (
	<Logo status={props.status} onClick={() => props.onClick(!props.status)}>
		DM
	</Logo>
);
