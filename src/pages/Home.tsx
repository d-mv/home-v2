import { Message } from "../components/Message";
import styles from "./Home.module.css";

const Home = () => (
	<div id="home__content" className={styles.content}>
		<section id="home__column-left" className={styles.column}>
			<Message />
		</section>
		<section id="home__column-right" className={styles.column}>
			<div
				id="home__avatar"
				className={styles.photo}
				style={{
					backgroundImage: `url('https://res.cloudinary.com/diciu4xpu/image/upload/v1565120083/home/v2/home/avatar.jpg')`,
				}}
			/>
		</section>
	</div>
);

export default Home;
