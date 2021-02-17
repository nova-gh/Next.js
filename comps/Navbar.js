import React from "react";
import Link from "next/link";
import styles from "../styles/Layout.module.css";
import { Navbar, Nav, Container } from "react-bootstrap";
// import logo from "../public/logo.svg";
import Image from "next/image";
// import logo from "../public/favicon32.png";

const Navigation = () => {
	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			bg=""
			variant="light"
			className={styles.navColor}
		>
			<Link href="/">
				<Navbar.Brand href="#home">
					<Image
						src="/logo1.svg"
						// src={logo}
						className="d-inline-block align-top "
						alt="logo"
						width={60}
						height={60}
						className={styles.logo}
					/>
					{/* missing source  */}
				</Navbar.Brand>
			</Link>

			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="ml-auto" variant="dark">
					<Link href="/">
						<Nav.Link className={styles.linkColor} href="#home">
							Home
						</Nav.Link>
					</Link>
					<Link href="/about">
						<Nav.Link className={styles.linkColor} href="#about">
							About
						</Nav.Link>
					</Link>
					<Link href="/contact">
						<Nav.Link href="#contact">Contact</Nav.Link>
					</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigation;
