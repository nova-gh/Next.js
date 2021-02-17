import Image from "next/image";
import styles from "../styles/Home.module.css";

import Meta from "../comps/Meta";
import { Row, Col, Container } from "react-bootstrap";
export default function Home() {
	return (
		<div className={styles.wrapper}>
			<Meta
				title="Home"
				desc="Sifk's Twitch Streamer. Come say hello in the chat."
			/>

			{/* <main className={styles.main}> */}
			<Container>
				<Row className={styles.homeRow}>
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
						<a href="https://www.twitch.tv/sifk">Twitch Streamer.</a>
					</h1>
				</Row>
			</Container>
			{/* </main> */}
		</div>
	);
}
