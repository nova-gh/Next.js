import styles from "../styles/home.module.css";

import React from "react";

export default function Footer() {
	const getCurrYear = () => {
		return new Date().getFullYear();
	};

	return (
		<div className>
			<footer className={styles.footer}>
				<p className={styles.footerP}>Copyright © {getCurrYear()}, N Gh.</p>
			</footer>
		</div>
	);
}
