import React from 'react';
import Content from '../style/project/Content';
import { data } from '../data/index';
import { ProjectCard } from '../components';
import { ProjectType } from '../types';

const Projects = (props: { onClick: (arg0: ProjectType) => void }) => (
	<Content id='projects__content'>
		{data.projects.map((project: ProjectType, index: number) => (
			<ProjectCard key={index} project={project} onClick={props.onClick} />
		))}
	</Content>
);

export default Projects;
