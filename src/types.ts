export interface DetailsPhotos {
	s: string;
	m: string;
	l: string;
	xl: string;
	xxl: string;
}
export interface ProjectType {
	title: string;
	description: string;
	photo: {
		card: string[];
		details: DetailsPhotos;
	};
	details: string;
	technology: string[];
	links: {
		[index: string]: string;
	};
}

export interface ModuleData {
	title: string;
	margin: string;
	route: string;
	module: string;
}

export interface Icon {
	element: JSX.Element;
	label: string;
	link: string;
}
export interface PhotoObj {
	title: string;
	location: string;
	large: string;
	thumb: string;
}
export interface ProjectPhoto {
	card: string[];
	details: {
		s: string;
		l: string;
		m: string;
		xl: string;
		xxl: string;
	};
}
export interface ProjLinks {
	[index: string]: string;
}
export interface ProjObj {
	title: string;
	description: string;
	photo: ProjectPhoto;
	details: string;
	technology: string[];
	links: ProjLinks;
}
export interface ContactObj {
	icon: string;
	description: string;
	link: string;
}

export interface Data {
	photos: PhotoObj[];
	projects: ProjObj[];
	technology: { [index: string]: string[] };
	contacts: ContactObj[];
}
