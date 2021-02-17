import "../styles/globals.css";
import Layout from "../comps/Layout";
import Meta from "../comps/Meta";
import Head from "next/head";
export default function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			{/* <Head>
				<link rel="icon" type="image/png/x-icon" href="/favicon.png" />
			</Head> */}
			<Component {...pageProps} />
		</Layout>
	);
}
