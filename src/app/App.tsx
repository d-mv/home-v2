import React, { useState } from 'react';

import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Photos from '../pages/Photos';
import Contact from '../pages/Contact';

import Global from '../style/Global';
import Content from '../style/Content';
import { LogoButton, NavBar, Project } from '../components';
import Wrapper from '../style/Wrapper';
import { ProjectType } from '../types';

const App = () => {
	const [module, setModule] = useState('HOME');
	const [project, setProject] = useState<ProjectType|undefined>();
	const mobile = window.innerWidth <= 500;
	const [navBarOpen, setNavBarOpen] = useState(!mobile);

	const close = () => setProject(undefined);

	const handleModuleChange = (newModule: string) => {
		if (newModule !== module) setModule(newModule);
		if (mobile) setNavBarOpen(false);
	};

	const logo = <LogoButton status={navBarOpen} onClick={setNavBarOpen} />;
	const navbar = <NavBar mobile={mobile} module={module} onClick={handleModuleChange} />;
	const home = module === 'HOME' && <Home />;
	const projects = module === 'PROJECTS' && (
		<Projects modalIsOpen={!!project} onClick={setProject} />
	);
	const modal = project && <Project project={project} onClick={close} />;
	const photos = module === 'PHOTOS' && <Photos />;
	const contact = module === 'CONTACT' && <Contact />;

	return (
		<Wrapper id="app__wrapper">
			<Global />
			{logo}
			{navBarOpen && navbar}
			<Content id='app__content'>
				{home}
				{projects}
				{photos}
				{contact}
			</Content>
			{modal}
		</Wrapper>
	);
};

export default App;
