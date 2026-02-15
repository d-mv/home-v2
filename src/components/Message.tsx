import styles from "./Message.module.css";

export const Message = () => (
	<article id="home__message">
		<p className={styles.h1} id="home__message_h1">
			WELCOME,
		</p>
		<p className={styles.h2} id="home__message_h2">
			I’m Dmitry
		</p>
		<p className={styles.h3} id="home__message_h3">
			FRONT-END DEVELOPER
		</p>
		<p className={styles.h4} id="home__message_h4">
			React.js, React Native, Vue.js, Express, Rails & etc. Learning new,
			reading sci-fi and making photos when free.
		</p>
	</article>
);
