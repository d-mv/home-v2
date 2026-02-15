import React from "react";
import styles from "./NavBar.module.css";
import { ModuleData } from "../types";
import { modules } from "../data/index";
import NavButton from "./NavButton";

export interface NBProps {
	mobile: boolean;
	module: string;
	onClick: (arg0: string) => void;
}

export const NavBar = ({ mobile, module, onClick }: NBProps) => (
	<nav
		className={styles.navigation}
		id="navbar"
		style={{ animationDelay: mobile ? "0s" : "1s" }}
	>
		{Object.entries(modules).map((value: [string, ModuleData]) => (
			<NavButton
				key={value[0]}
				active={value[1].title === module}
				module={value[1]}
				onClick={onClick}
				mobile={mobile}
			/>
		))}
	</nav>
);
