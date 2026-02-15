import { icons } from "../data";
import type { Icon } from "../types";
import styles from "./Lines.module.css";

const onClick = (url: string) => window.open(url, "_blank");

export const Lines = () => (
	<section id="contact__column" className={styles.column}>
		{icons.map((icon: Icon, index: number) => {
			return (
				<button
					type="button"
					className={styles.line}
					id={`contact__line_${icon.label.split(" ").join("-")}`}
					key={icon.label}
					style={{
						animationDelay: `${index * 0.3}s`,
						justifyContent: "flex-start",
					}}
					onClick={() => onClick(icon.link)}
				>
					{icon.element}
					<span className={styles.label}>{icon.label}</span>
				</button>
			);
		})}
	</section>
);
