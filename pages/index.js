import Head from "next/head";
import styles from "../styles/home.module.css";
import Avatar from "avataaars";
import { Container } from "@material-ui/core";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Sifk | Twitch Streamer</title>
				<link rel="icon" href="/favicon32.png" />
			</Head>

			<main className={styles.main}>
				<grid className={styles.grid}>
					<Avatar
						topType="ShortHairTheCaesar"
						accessoriesType="Blank"
						hairColor="Black"
						facialHairType="BeardLight"
						facialHairColor="Black"
						clotheType="Hoodie"
						clotheColor="PastelRed"
						eyeType="Happy"
						eyebrowType="Default"
						mouthType="Smile"
						skinColor="DarkBrown"
						className={styles.avatar}
					/>
					<h1 className={styles.title}>Hello!</h1>
					<h1 className={styles.title}>
						My name is Sifk, a {}
						<a href="https://www.twitch.tv/sifk">Twitch Streamer!</a>
					</h1>
				</grid>
			</main>
		</div>
	);
}
