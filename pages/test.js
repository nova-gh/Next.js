const axios = require("axios");
// const auth = "Bearer 5ptw0u1s2d5wajujw03czl2dq6nmy9";
// const cID = "wgeg2j55eg26p46i1zklnrkpd8no0y";

const Test = () => {
	const stream = [];
	const getStream = (e) => {
		e.preventDefault();
		axios({
			url: "https://api.twitch.tv/helix/streams?user_login=imaqtpie",
			method: "get",
			headers: {
				Authorization: "Bearer 5ptw0u1s2d5wajujw03czl2dq6nmy9",
				"Client-Id": "wgeg2j55eg26p46i1zklnrkpd8no0y",
			},
		})
			.then((response) => {
				console.log(response);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div>
			<h4>Beer</h4>
			<button onClick={getStream}>Get all beers</button>
		</div>
	);
};

export default Test;

// import { useState } from "react";
// const axios = require("axios");
// const Test = () => {
// 	const [beerList, setBeerList] = useState([]);

// 	const getBeers = (e) => {
// 		e.preventDefault();
// 		axios
// 			.get("https://api.punkapi.com/v2/beers")
// 			.then((res) => setBeerList(res.data))
// 			.catch((err) => console.log(err));
// 	};
// 	return (
// 		<div>
// 			<h4>Beer</h4>
// 			<button onClick={getBeers}>Get all beers</button>
// 			{beerList.length >= 1
// 				? beerList.map((beer, idx) => {
// 						return <p key={idx}>{beer.name}</p>;
// 				  })
// 				: ""}
// 		</div>
// 	);
// };

// export default Test;
