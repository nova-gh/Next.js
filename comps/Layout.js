import styles from "../styles/Layout.module.css";
import Head from "next/head";
import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";
export default function Layout({ children }) {
	return (
		<div className>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
}
