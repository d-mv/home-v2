import styles from "./LogoButton.module.css";

export const LogoButton = (props: {
	status: boolean;
	onClick: (arg0: boolean) => void;
}) => (
	<button
		type="button"
		className={`${styles.logo} ${props.status ? styles.active : ""}`}
		id="logo"
		onClick={() => props.onClick(!props.status)}
	>
		DM
	</button>
);
