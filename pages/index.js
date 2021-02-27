// import styles from "../styles/Home.module.css";
import styles from "../styles/Index.module.css";
import Image from "next/image";

import Meta from "../comps/Meta";
import Online from "../comps/Online";
import Offline from "../comps/Offline";
import { Row, Col, Container } from "react-bootstrap";

export async function getServerSideProps(context) {
	const res = await fetch(process.env.API_URL, {
		headers: {
			Authorization: process.env.AUTH,
			"Client-Id": process.env.CID,
		},
	});
	const data = await res.json();
	console.log(data);
	return {
		props: { results: data },
	};
}
const Home = () => {
	// const Home = ({ results }) => {
	// const apiResults = results.data;
	// console.log(apiResults);
	// var statusButton;
	// if (!Array.isArray(apiResults) || !apiResults.length) {
	// 	statusButton = <Offline />;
	// } else {
	// 	statusButton = <Online />;
	// }
	return (
		<div className={styles.wrapper}>
			<Meta
				title="Home"
				desc="Sifk's Twitch Streamer. Come say hello in the chat."
			/>

			<Container>
				<Row className={styles.homeRow}>
					<Image
						src="/avatar1.svg"
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
						a {}
						<a
							href="https://www.twitch.tv/sifk"
							target="_blank"
							rel="noreferrer"
						>
							Twitch Streamer.
						</a>
					</h1>
				</Row>

				{/* <Row className={styles.statusRow}>{statusButton}</Row> */}
			</Container>
		</div>
	);
};
export default Home;
