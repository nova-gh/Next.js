import "../styles/globals.css";
import Layout from "../comps/Layout";
import Meta from "../comps/Meta";
export default function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
