import React from "react";
import Meta from "../comps/Meta";
import styles from "../styles/Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitch,
	faTwitter,
	faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { Row, Col, Container } from "react-bootstrap";
export default function Contact() {
	return (
		<Container className={styles.wrapper}>
			<Meta
				title="Contact"
				desc="Sifk's Twitch Streamer. Come say hello in the chat."
			/>{" "}
			<h5 className={styles.text}>
				Come say hi on the stream or any of my socials.
			</h5>
			<Container className={styles.contactCont}>
				<Row lg="12" className={styles.contactRow}>
					<a href="https://www.twitch.tv/sifk" target="_blank" rel="noreferrer">
						<FontAwesomeIcon
							icon={faTwitch}
							style={{ color: "#9147ff" }}
							size="2x"
							className={styles.socials}
						/>
					</a>
				</Row>
				<Row className={styles.contactRow}>
					<a
						href="https://twitter.com/SIFKontwitch"
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon
							icon={faTwitter}
							style={{ color: "#1da1f2" }}
							size="1x"
							className={styles.socials}
						/>
					</a>
				</Row>
				<Row className={styles.contactRow}>
					<a
						href="https://discord.com/invite/NjpVcEu"
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon
							style={{ color: "#7289da" }}
							icon={faDiscord}
							size="1x"
							className={styles.socials}
						/>
					</a>
				</Row>
			</Container>
		</Container>
	);
}
