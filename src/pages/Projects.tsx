import { ProjectCard } from "../components";
import { data } from "../data/index";
import Content from "../style/project/Content";
import type { ProjectType } from "../types";

export interface PProps {
	modalIsOpen: boolean;
	onClick: (arg0: ProjectType) => void;
}

const Projects = ({ modalIsOpen, onClick }: PProps) => (
	<Content id="projects__content" modalIsOpen={modalIsOpen}>
		{data.projects.map((project: ProjectType) => (
			<ProjectCard key={project.title} project={project} onClick={onClick} />
		))}
	</Content>
);

export default Projects;
