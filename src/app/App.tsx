import React, { useState } from 'react';

import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Photos from '../pages/Photos';
import Contact from '../pages/Contact';

import Global from '../style/Global';
import Content from '../style/Content';
import { LogoButton, NavBar, Project } from '../components';
import Wrapper from '../style/Wrapper';

const App = () => {
	const [module, setModule] = useState('HOME');
	const [project, setProject] = useState();
	const mobile = window.innerWidth <= 500;
	// const [navBarOpen, setNavBarOpen] = useState(true);
	const [navBarOpen, setNavBarOpen] = useState(mobile ? false : true);

	const close = () => setProject('');
	const handleModuleChange = (newModule: string) => {
		if (newModule !== module) setModule(newModule);
		if (mobile) setNavBarOpen(false);
	};

	const logo = <LogoButton status={navBarOpen} onClick={setNavBarOpen} />;
	const navbar = <NavBar module={module} onClick={handleModuleChange} />;
	const home = module === 'HOME' && <Home />;
	const projects = module === 'PROJECTS' && <Projects onClick={setProject} />;
	const modal = project && <Project project={project} onClick={close} />;
	const photos = module === 'PHOTOS' && <Photos />;
	const contact = module === 'CONTACT' && <Contact />;

	return (
		<Wrapper>
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
