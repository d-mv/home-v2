import type { JSX } from "react";
import { data } from "../data/index";
import Stack from "../style/project/Stack";
import TechIcon from "../style/project/TechIcon";

export const TechStack = (props: { technology: string[] }): JSX.Element => {
	return (
		<Stack id="modal__stack">
			{props.technology.map((el: string, index: number) => (
				<TechIcon
					key={el}
					id="modal__stack_tech-icon"
					image={data.technology[el][0]}
					delay={index * 0.1}
				/>
			))}
		</Stack>
	);
};
