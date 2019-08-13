import React from 'react';
import Logo from '../style/Logo';

export const LogoButton = (props: {
	status: boolean;
	onClick: (arg0: boolean) => void;
}) => (
	<Logo id='logo' status={props.status} onClick={() => props.onClick(!props.status)}>
		DM
	</Logo>
);
