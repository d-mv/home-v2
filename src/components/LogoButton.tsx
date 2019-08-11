import React, { useState, useEffect } from 'react';
import Logo from '../style/Logo';
import { useSpring } from 'react-spring';

export const LogoButton = (props: {
	status: boolean;
	onClick: (arg0: boolean) => void;
}) => {
	const [opacity, setOpacity] = useState(0);
	
	useEffect(() => {
		setTimeout(() => setOpacity(1), 1000);
	}, []);

	return (
		<Logo
			status={props.status}
			onClick={() => props.onClick(!props.status)}
			style={useSpring({
				from: { opacity: 0 },
				to: { opacity }
			})}>
			DM
		</Logo>
	);
};
