import React from 'react';
import InLine from '../style/InLine';
import Title from '../style/project/Title';
import Line from '../style/Line';
import { CloseButton } from '../components';

export const Header = (props: { title: string; onClick: () => void }): JSX.Element => (
	<InLine id='modal__headline' width='95%' margin='0 2.5%'>
		<Title id='modal__headline_title'>{props.title}</Title>
		<Line id='modal__headline_line' />
		{window.innerWidth >= 420 && <CloseButton onClick={props.onClick} />}
	</InLine>
);
