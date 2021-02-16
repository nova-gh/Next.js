import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	appbar: {
		backgroundColor: "#1D1D1E",
	},
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
		color: "white",
	},
	title: {
		flexGrow: 1,
	},
	avatar: {
		width: "70px",
		height: "70px",
		paddingTop: "5px",
	},
}));

const Navbar = () => {
	const classes = useStyles();

	return (
		<AppBar position="static" className={classes.appbar}>
			<Toolbar>
				<Link href="/">
					<Avatar alt="Logo" src="/logo.svg" className={classes.avatar} />
				</Link>
				<Typography variant="h6" className={classes.title}></Typography>
				<Link href="/about">
					<Button className={classes.menuButton}>About</Button>
				</Link>
				<Link href="/contact">
					<Button className={classes.menuButton}>Contact</Button>
				</Link>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
