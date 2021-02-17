import styles from "../styles/Layout.module.css";

import React from "react";
import { Container } from "react-bootstrap";

export default function Footer() {
	const getCurrYear = () => {
		return new Date().getFullYear();
	};
	return (
		<Container fluid className={styles.footerCont}>
			<div>
				<svg
					preserveAspectRatio="none"
					viewBox="0 0 1200 120"
					xmlns="http://www.w3.org/2000/svg"
					style={{
						fill: "#9fd7e3",
						width: "100%",
						height: "22px",
						transform: "rotate(180deg)",
						marginBottom: "-1px",
					}}
				>
					<path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
				</svg>
			</div>
			<footer className={styles.footer}>
				<p className={styles.footerP}>Copyright © {getCurrYear()}, N Gh.</p>
			</footer>
		</Container>
	);
}
