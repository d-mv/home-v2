import Link from "../style/project/Link";
import Links from "../style/project/Links";
import type { ProjLinks } from "../types";
import { Underline } from "./Underline";

export interface PLProps {
	links: ProjLinks;
}

export const ProjectLinks = ({ links }: PLProps) => (
	<Links id="modal__links">
		{Object.keys(links).map((link: string) => (
			<Link
				id="modal__links_link"
				key={link}
				onClick={() => window.open(links[link], "_blank")}
			>
				<Underline>{link}</Underline>
			</Link>
		))}
	</Links>
);
