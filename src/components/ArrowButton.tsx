import styles from "./ArrowButton.module.css";
import { SvgIcon } from "./SvgIcon";

export const ArrowButton = (props: {
	left?: boolean;
	right?: boolean;
	onClick: (arg0: string) => void;
}) => (
	<button
		type="button"
		className={styles.arrow}
		id={`photos__belt_arrow-${props.left ? "left" : "right"}`}
		onClick={() => props.onClick(props.left ? "minus" : "plus")}
	>
		{props.left ? (
			<SvgIcon src="/icons/angle-left.svg" />
		) : (
			<SvgIcon src="/icons/angle-right.svg" />
		)}
	</button>
);
