import React from "react";
import styles from "../styles/About.module.css";
import Meta from "../comps/Meta";
import { Container, Row, Card, CardDeck, Col, Media } from "react-bootstrap";
import Image from "next/image";
// import Yo from "";
export default function About() {
	return (
		<div className={styles.wrapper}>
			<Meta
				title="About"
				desc="Sifk's Twitch Streamer. Come say hello in the chat."
			/>
			<Container className={styles.aboutCont}>
				<Media className="pb-5">
					<img
						className="mr-3 rounded"
						width={120}
						height={120}
						alt="yosemite"
						src="/yosemite.jpg"
					/>
					<Media.Body>
						<h5 className={styles.title}>About me</h5>
						<p className={styles.text}>
							I am based of West Coast and currently a student majoring in
							Economics. As the pandemic started last year, I decided to start
							streaming on Twitch TV. Come see m
						</p>
					</Media.Body>
				</Media>
				<Media className="pb-5">
					<Media.Body>
						<h5 className={styles.title}>Hobbies</h5>
						<p className={styles.text}>
							When I am not streaming, I like to stay active. My favorite way to
							stay active would be doing Jui Jitsu or playing soccer. I am also
							a tech and coffee enthusiast, and my go-to method for making
							strong coffee would be a slow drip.
						</p>
					</Media.Body>
					<img
						className="ml-3 rounded"
						width={120}
						height={120}
						alt="yosemite"
						src="/ju.JPG"
					/>
				</Media>
				<Media className="pb-5">
					<img
						className="mr-3 rounded"
						width={120}
						height={120}
						alt="yosemite"
						src="/hunt.JPG"
					/>
					<Media.Body>
						<h5 className={styles.title}>Streaming Content</h5>
						<p className={styles.text}>
							As of right now I am mainly playing Hunt Show Down and enjoying
							making content with other like-minded streamers. I also play and
							stream other games such as Call of Duty: Warzone, League of
							Legends, Rust, and much more.
						</p>
					</Media.Body>
				</Media>
			</Container>
		</div>
	);
}
