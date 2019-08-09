import React from 'react';
import Links from '../style/project/Links';
import Link from '../style/project/Link';
import { Underline } from '../style/tokens/animation';

export const ProjectLinks = (props: { links: {} }) => (
					<Links id='modal__links'>
						{Object.keys(props.links).map((link: string, index: number) => (
							// TODO: links are not clickable
							// TODO: format links
							<Link id='modal__links_link' key={index}>
								<Underline>{link}</Underline>
							</Link>
						))}
					</Links>
				);
