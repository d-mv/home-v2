import React from "react";
import styles from "./Underline.module.css";

interface Props {
	color?: string;
	children: React.ReactNode;
	id?: string;
}

export const Underline = ({ color, children, id }: Props) => (
	<span
		id={id}
		className={styles.underline}
		style={
			{
				"--underline-color": color,
			} as React.CSSProperties
		}
	>
		{children}
	</span>
);
