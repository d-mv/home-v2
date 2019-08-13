import React from 'react';
import { ProjectType } from '../types';
import Modal from '../style/Modal';
import Content from '../style/modal/Content';
import Column from '../style/project/Column';
import Description from '../style/project/Description';
import Photo from '../style/project/Photo';
import { imageSize } from '../lib/image_size';
import { Header, TechStack, ProjectLinks, CloseButton } from './';

export const Project = (props: { project: ProjectType; onClick: () => void }) => {
	const description = (
		<Column id='modal__content_column' width='30%' justify='space-around' >

				<TechStack technology={props.project.technology} />
				<Description id='modal__description'>{props.project.details}</Description>

			<ProjectLinks links={props.project.links} />
		</Column>
	);

	const photo = (
		<Column id='modal__content_column' width='65%'>
			<Photo id='modal__photo' image={imageSize(props.project.photo.details)}></Photo>
		</Column>
	);
	return (
		<Modal id='modal'>
			<Header title={props.project.title} onClick={props.onClick} />
			{window.innerWidth < 420 && <CloseButton onClick={props.onClick} />}
			<Content id='modal__content' height='inherit'>
				{description}
				{photo}
			</Content>
		</Modal>
	);
};
