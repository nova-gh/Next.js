import React from "react";
import { Container, Typography, Box, Button, Grid } from "@material-ui/core/";

export default function About() {
	return (
		<Grid>
			<Container>
				<Box my={4}>
					<Typography variant="h4" component="h1" gutterBottom>
						Next.js example
					</Typography>
					<Button variant="contained" color="primary" naked href="/">
						Go to the main page
					</Button>
				</Box>
			</Container>
		</Grid>
	);
}
