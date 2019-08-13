import React from 'react';
import Links from '../style/project/Links';
import Link from '../style/project/Link';
import { Underline } from '../style/tokens/animation';
import { ProjLinks } from '../types';

export interface PLProps {
	links: ProjLinks;
}

export const ProjectLinks = ({ links }: PLProps) => (
	<Links id='modal__links'>
		{Object.keys(links).map((link: string, index: number) => (
			<Link
				id='modal__links_link'
				key={index}
				onClick={() => window.open(links[link], '_blank')}>
				<Underline>{link}</Underline>
			</Link>
		))}
	</Links>
);
