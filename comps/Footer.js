import styles from "../styles/Layout.module.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	appbar: {
		backgroundColor: "#00587a",
	},
	footerP: {
		color: "white",
	},
}));

export default function Footer() {
	const classes = useStyles();
	const getCurrYear = () => {
		return new Date().getFullYear();
	};

	return (
		<div className>
			<footer className={styles.footer}>
				<p className={classes.footerP}>Copyright © {getCurrYear()}, N Gh.</p>
			</footer>
		</div>
	);
}
