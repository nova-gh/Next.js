import { Button } from "react-bootstrap";
const test = ({ results }) => {
	let apiResults = results.data;
	// console.log(apiResults);
	if (!Array.isArray(apiResults) || !apiResults.length) {
		// console.log("Offline");
		return <Button variant="light">Offline</Button>;
	} else {
		return <Button variant="danger">LIVE</Button>;
		// console.log("Live");
	}
};
export async function getServerSideProps() {
	// console.log(process.env.AUTH);
	// console.log(process.env.CID);
	const res = await fetch(process.env.API_URL, {
		headers: {
			Authorization: process.env.AUTH,
			"Client-Id": process.env.CID,
		},
	});
	const results = await res.json();
	// console.log(results);
	return {
		props: { results },
	};
}
export default test;
