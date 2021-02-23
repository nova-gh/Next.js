// import styles from "../styles/Home.module.css";
import styles from "../styles/Index.module.css";
import Image from "next/image";

import Meta from "../comps/Meta";
import Online from "../comps/Online";
import Offline from "../comps/Offline";
import { Row, Col, Container } from "react-bootstrap";

export async function getServerSideProps() {
	// console.log(process.env.AUTH);
	// console.log(process.env.CID);
	const res = await fetch(process.env.API_URL, {
		headers: {
			Authorization: process.env.AUTH,
			"Client-Id": process.env.CID,
		},
	});
	const results = await res.json();
	// console.log(results);
	return {
		props: { results },
	};
}
const Home = ({ results }) => {
	const apiResults = results.data;
	console.log(apiResults);
	var statusButton;
	if (!Array.isArray(apiResults) || !apiResults.length) {
		statusButton = <Offline />;
	} else {
		statusButton = <Online />;
	}
	return (
		<div className={styles.wrapper}>
			<Meta
				title="Home"
				desc="Sifk's Twitch Streamer. Come say hello in the chat."
			/>

			<Container>
				<Row className={styles.homeRow}>
					<Image
						src="/avatar.svg"
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
					<h1 className={styles.title}>My name is Sifk,</h1>
				</Row>
				<Row className={styles.homeRow}>
					<h1 className={styles.title}>
						<a
							href="https://www.twitch.tv/sifk"
							target="_blank"
							rel="noreferrer"
						>
							Twitch Streamer.
						</a>
					</h1>
				</Row>

				<Row className={styles.statusRow}>{statusButton}</Row>
			</Container>
		</div>
	);
};
export default Home;
