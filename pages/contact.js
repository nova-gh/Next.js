import React from "react";
import Meta from "../comps/Meta";
import styles from "../styles/home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitch,
	faTwitter,
	faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { Row, Col } from "react-bootstrap";
export default function Contact() {
	return (
		<div className={styles.container}>
			<Meta
				title="Contact"
				desc="Sifk's Twitch Streamer. Come say hello in the chat."
			/>
			<main className={styles.main}>
				<Row>
					<Col className={styles.socialContact}>
						<a
							href="https://www.twitch.tv/sifk"
							target="_blank"
							rel="noreferrer"
						>
							<FontAwesomeIcon
								icon={faTwitch}
								style={{ color: "#9147ff" }}
								size="5x"
							/>
						</a>
					</Col>
					<Col className={styles.socialContact}>
						<a
							href="https://twitter.com/SIFKontwitch"
							target="_blank"
							rel="noreferrer"
						>
							<FontAwesomeIcon
								icon={faTwitter}
								style={{ color: "#1da1f2" }}
								size="5x"
							/>
						</a>
					</Col>
					<Col className={styles.socialContact}>
						<a
							href="https://discord.com/invite/NjpVcEu"
							target="_blank"
							rel="noreferrer"
						>
							<FontAwesomeIcon
								style={{ color: "#7289da" }}
								icon={faDiscord}
								size="5x"
							/>
						</a>
					</Col>
				</Row>
			</main>
		</div>
	);
}
