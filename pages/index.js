import Image from "next/image";
import styles from "../styles/home.module.css";
import Avatar from "avataaars";
import Meta from "../comps/Meta";
import { Row, Col, Container } from "react-bootstrap";
export default function Home() {
	return (
		<div className={styles.container}>
			<Meta
				title="Home"
				desc="Sifk's Twitch Streamer. Come say hello in the chat."
			/>

			{/* <main className={styles.main}> */}
			<Container>
				<Row className={styles.homeRow}>
					{/* <Avatar
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
					/> */}
					<Image
						src="/avatar.svg"
						// src={logo}
						alt="avatar"
						width={200}
						height={200}
						className={styles.avatarHome}
					/>
				</Row>
				<Row className={styles.homeRow}>
					<h1 className={styles.title}>Hello!</h1>
				</Row>
				<Row className={styles.homeRow}>
					<h1 className={styles.title}>
						My name is Sifk, a {}
						<a href="https://www.twitch.tv/sifk">Twitch Streamer!</a>
					</h1>
				</Row>
			</Container>
			{/* </main> */}
		</div>
	);
}
