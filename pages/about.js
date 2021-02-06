import styles from "../styles/Layout.module.css";

export default function About() {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				Hi!, my name is Sifk, a
				<a href="https://www.twitch.tv/sifk"> Twitch Streamer!</a>
			</h1>
		</div>
	);
}
