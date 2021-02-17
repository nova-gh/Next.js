import Head from "next/head";
import styles from "../styles/home.module.css";
import Avatar from "avataaars";
import { Container } from "@material-ui/core";
import Meta from "../comps/Meta";
import { Row, Col } from "react-bootstrap";
export default function Home() {
	return (
		<div className={styles.container}>
			<Meta
				title="Home"
				desc="Sifk's Twitch Streamer. Come say hello in the chat."
			/>

			<main className={styles.main}>
				<Row>
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
				</Row>
				<Row>
					<h1 className={styles.title}>Hello!</h1>
				</Row>
				<Row>
					<h1 className={styles.title}>
						My name is Sifk, a {}
						<a href="https://www.twitch.tv/sifk">Twitch Streamer!</a>
					</h1>
				</Row>
			</main>
		</div>
	);
}
