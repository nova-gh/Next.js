import React from "react";
import Head from "next/head";
import styles from "../styles/Layout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitch,
	faTwitter,
	faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	socials: {
		width: "70px",
		height: "70px",
		paddingTop: "5px",
	},
}));

export default function Contact() {
	const classes = useStyles();
	return (
		<div className={styles.container}>
			<Head>
				<title>Contact| SIFK</title>
				<link rel="icon" href="/favicon32.png" />
			</Head>
			<main className={styles.main}>
				<container className={styles.container}>
					<a href="https://www.twitch.tv/sifk" target="_blank" rel="noreferrer">
						<FontAwesomeIcon
							className="socials twitch"
							icon={faTwitch}
							size="3x"
						/>
					</a>
					<a
						href="https://twitter.com/SIFKontwitch"
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon
							className="socials twitter"
							icon={faTwitter}
							size="3x"
						/>
					</a>
					<a
						href="https://discord.com/invite/NjpVcEu"
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon
							className="socials discord"
							icon={faDiscord}
							size="3x"
						/>
					</a>
				</container>
			</main>
		</div>
	);
}
