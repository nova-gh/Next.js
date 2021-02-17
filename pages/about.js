import React from "react";
import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Meta from "../comps/Meta";
export default function About() {
	return (
		<div className={styles.container}>
			<Meta
				title="About"
				desc="Sifk's Twitch Streamer. Come say hello in the chat."
			/>
			<main className={styles.main}>
				<h3 className={styles.title}>
					I began my streaming journey last year right around when pandemic
					started.
				</h3>
				<h3 className={styles.title}>
					I mainly play Hunt Showdown, Warzone and recently started playing
					Rust.
				</h3>
			</main>
		</div>
	);
}
