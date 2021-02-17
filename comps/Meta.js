import Head from "next/head";
const Meta = (props) => {
	return (
		<Head>
			<title>{props.title}| SIFK</title>
			<meta name="description" content={props.desc} />
			<meta property="og:type" content="website" />
			<meta name="og:title" property="og:title" content={props.title} />
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<meta
				name="og:description"
				property="og:description"
				content={props.desc}
			/>
			<meta property="og:site_name" content="www.novaghimire.com" />
		</Head>
	);
};

export default Meta;
