import React from "react";
import styles from "./NavBar.module.css";
import { ModuleData } from "../types";

export interface NBPRops {
	mobile?: boolean;
	module: ModuleData;
	active: boolean;
	onClick: (arg0: string) => void;
}

const NavButton = (props: NBPRops) => (
	<div
		className={styles.box}
		id={`navbar__box_${props.module.title}`}
		style={
			{
				"--box-height":
					props.module.title === "HOME" && !props.mobile ? "10rem" : "12rem",
			} as React.CSSProperties
		}
	>
		<button
			type="button"
			className={`${styles.button} ${props.active ? styles.active : ""}`}
			id="navbar__button"
			onClick={() => props.onClick(props.module.title)}
		>
			{props.module.title}
		</button>
	</div>
);

export default NavButton;
