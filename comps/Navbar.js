import React from "react";
// import Link from "next/link";
import paths from "../path";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
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
				{/* <Link href="/index" passHref> */}
				{/* <Link to={path.home}> */}
				<Avatar alt="Logo" src="/logo.svg" className={classes.avatar} />
				{/* </Link> */}
				{/* </Link> */}
				<Typography variant="h6" className={classes.title}></Typography>
				<Button className={classes.menuButton}>About</Button>
				<Button className={classes.menuButton}>Contact</Button>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
