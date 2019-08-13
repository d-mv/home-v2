import React from 'react';
import Card from '../style/Card';
import Photo from '../style/card/Photo';
import Title from '../style/card/Title';
import { grey } from '../style/tokens/color';
import { ProjectType } from '../types';
import { cardImageSize } from '../lib/image_size';
import { stringLine } from '../lib/utils';
import Border from '../style/card/Border';

export const ProjectCard = (props: {
	project: ProjectType;
	onClick: (arg0: ProjectType) => void;
}) => (
	<Card
		id={`project__card_${stringLine([props.project.title])}`}
		onClick={() => props.onClick(props.project)}>
		<Photo id='project__card_photo' image={cardImageSize(props.project.photo.card)} />
		<Border id='project__card_border' />
		<Title id='project__card_title' color={grey}>
			{props.project.title}
		</Title>
	</Card>
);
