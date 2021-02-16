import React from "react";
import Head from "next/head";
import styles from "../styles/Layout.module.css";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
	socials: {
		width: "70px",
		height: "70px",
		paddingTop: "5px",
	},
}));

export default function Contact() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Contact| SIFK</title>
				<link rel="icon" href="/favicon32.png" />
			</Head>
			<main className={styles.main}>
				<Avatar
					alt="socials"
					src="/twitch.svg"
					href="https://www.twitch.tv/sifk"
					target="_blank"
					className={classes.avatar}
				/>
				<Avatar
					alt="socials"
					src="/twitter.svg"
					href="https://twitter.com/SIFKontwitch"
					target="_blank"
					className={classes.avatar}
				/>
				<Avatar
					alt="socials"
					src="/discord.svg"
					href="https://discord.com/invite/NjpVcEu"
					target="_blank"
					className={classes.avatar}
				/>
			</main>
		</div>
	);
}
