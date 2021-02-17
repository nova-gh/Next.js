import Head from "next/head";
import styles from "../styles/Layout.module.css";
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
				<Container>
					<Avatar
						avatarStyle="Circle"
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
						className=""
					/>
				</Container>
				<h1 className={styles.title}>
					Hi!, my name is Sifk, a
					<a href="https://www.twitch.tv/sifk"> Twitch Streamer!</a>
				</h1>
			</main>
		</div>
	);
}
