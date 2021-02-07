import styles from "../styles/Layout.module.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	appbar: {
		backgroundColor: "#00587a",
	},
	footer: {
		width: "100%",
		height: "100px",
		borderTop: "1px solid #68707F",
		background: "grey",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
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
			<footer className={classes.footer}>
				<p className={classes.footerP}>Copyright © {getCurrYear()}, N Gh.</p>
			</footer>
		</div>
	);
}
