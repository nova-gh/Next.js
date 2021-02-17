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
		<div className={styles.wrapper}>
			<Meta
				title="Contact"
				desc="Sifk's Twitch Streamer. Come say hello in the chat."
			/>
			<Container>
				<Row className={styles.contactRow}>
					<Col className>
						<Container className={styles.socialCont}>
							<a
								href="https://www.twitch.tv/sifk"
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faTwitch}
									style={{ color: "#9147ff" }}
									size="xs"
								/>
							</a>
						</Container>
					</Col>
					<Col className>
						<Container className={styles.socialCont}>
							<a
								href="https://twitter.com/SIFKontwitch"
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faTwitter}
									style={{ color: "#1da1f2" }}
									size="1x"
								/>
							</a>
						</Container>
					</Col>
					<Col className>
						<Container className={styles.socialCont}>
							<a
								href="https://discord.com/invite/NjpVcEu"
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									style={{ color: "#7289da" }}
									icon={faDiscord}
									size="1x"
								/>
							</a>
						</Container>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
