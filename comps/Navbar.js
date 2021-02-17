import React from "react";
import Link from "next/link";
import styles from "../styles/Layout.module.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import Image from "next/image";
const Navigation = () => {
	return (
		<Container fluid className={styles.navCont}>
			<Navbar
				collapseOnSelect
				expand="sm"
				bg={styles.custom}
				// variant="light"
				className={styles.navColor}
			>
				<Link href="/">
					<Navbar.Brand href="#home">
						<Image
							src="/logo1.svg"
							className="d-inline-block align-top "
							alt="logo"
							width={60}
							height={60}
							className={styles.logo}
						/>
					</Navbar.Brand>
				</Link>

				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className={styles.hamburger} variant="">
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
			<div>
				<svg
					preserveAspectRatio="none"
					viewBox="0 0 1200 120"
					xmlns="http://www.w3.org/2000/svg"
					style={{
						fill: "#00ffff",
						width: "100%",
						height: "22px",
						transform: "scaleX(-1)",
						marginTop: "-6px",
					}}
				>
					<path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
				</svg>
			</div>
		</Container>
	);
};

export default Navigation;
