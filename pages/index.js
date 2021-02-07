import Head from "next/head";
import Navbar from "../comps/Navbar";
import styles from "../styles/Layout.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Sifk | Twitch Streamer</title>
				<link rel="icon" href="/favicon32.png" />
			</Head>
			<main className={styles.main}>
				<h1 className={styles.title}>
					Hi!, my name is Sifk, a
					<a href="https://www.twitch.tv/sifk"> Twitch Streamer!</a>
				</h1>
			</main>
		</div>
	);
}
