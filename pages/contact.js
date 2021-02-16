import React from "react";
import Head from "next/head";
import styles from "../styles/Layout.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitch,
	faTwitter,
	faDiscord,
} from "@fortawesome/free-brands-svg-icons";

import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	socials: {
		width: "700px",
		height: "70px",
		paddingTop: "5px",
	},
	twitter: {
		color: "##03a9f4",
	},
	discord: {
		color: "##7289d9",
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
				<Grid container spacing={3}>
					<Grid item>
						<a
							href="https://www.twitch.tv/sifk"
							target="_blank"
							rel="noreferrer"
						>
							<FontAwesomeIcon
								className="socials twitch"
								icon={faTwitch}
								size="3x"
							/>
						</a>
					</Grid>
					<Grid item>
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
					</Grid>
					<Grid item>
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
					</Grid>
				</Grid>
			</main>
		</div>
	);
}
