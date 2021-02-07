import React from "react";
import Head from "next/head";
import styles from "../styles/Layout.module.css";
export default function About() {
	return (
		<div className={styles.container}>
			<Head>
				<title>About| SIFK</title>
				<link rel="icon" href="/favicon32.png" />
			</Head>
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
