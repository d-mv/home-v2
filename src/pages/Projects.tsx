import React from 'react';
import Content from '../style/project/Content';
import { data } from '../data/index';
import { ProjectCard } from '../components';
import { ProjectType } from '../types';

export interface PProps {
	modalIsOpen: boolean;
	onClick: (arg0: ProjectType) => void;
}

const Projects = ({ modalIsOpen, onClick }: PProps) => (
	<Content id='projects__content' modalIsOpen={modalIsOpen}>
		{data.projects.map((project: ProjectType, index: number) => (
			<ProjectCard key={index} project={project} onClick={onClick} />
		))}
	</Content>
);

export default Projects;
