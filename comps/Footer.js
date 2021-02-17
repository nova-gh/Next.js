import styles from "../styles/Layout.module.css";

import React from "react";

export default function Footer() {
	const getCurrYear = () => {
		return new Date().getFullYear();
	};

	return (
		<div className="footerCont">
			<footer className={styles.footer}>
				<p className={styles.footerP}>Copyright © {getCurrYear()}, N Gh.</p>
			</footer>
		</div>
	);
}
