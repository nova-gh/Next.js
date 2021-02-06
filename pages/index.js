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
			<Navbar />
			<main className={styles.main}>
				<h1 className={styles.title}>
					Hi!, my name is Sifk, a
					<a href="https://www.twitch.tv/sifk"> Twitch Streamer!</a>
				</h1>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{" "}
					<img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
				</a>
			</footer>
		</div>
	);
}

{
	/* <main className={styles.main}>
	<h1 className={styles.title}>
		Hi!, my name is Sifk, a
		<a href="https://www.twitch.tv/sifk"> Twitch Streamer!</a>
	</h1>

	<p className={styles.description}>
		Get started by editing <code className={styles.code}>pages/index.js</code>
	</p>

	<div className={styles.grid}>
		<a href="https://nextjs.org/docs" className={styles.card}>
			<h3>Documentation &rarr;</h3>
			<p>Find in-depth information about Next.js features and API.</p>
		</a>

		<a href="https://nextjs.org/learn" className={styles.card}>
			<h3>Learn &rarr;</h3>
			<p>Learn about Next.js in an interactive course with quizzes!</p>
		</a>

		<a
			href="https://github.com/vercel/next.js/tree/master/examples"
			className={styles.card}
		>
			<h3>Examples &rarr;</h3>
			<p>Discover and deploy boilerplate example Next.js projects.</p>
		</a>

		<a
			href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
			className={styles.card}
		>
			<h3>Deploy &rarr;</h3>
			<p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
		</a>
	</div>
</main>; */
}
