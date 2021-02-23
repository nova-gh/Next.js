import { Button, Spinner } from "react-bootstrap";
import styles from "../styles/Layout.module.css";
const Online = () => {
	return (
		<Button variant="danger">
			<div className={styles.onlineCont}>
				<Spinner
					className={styles.onlineCirlce}
					as="span"
					animation="grow"
					size="sm"
					role="Online Status"
					aria-hidden="true"
				/>
			</div>
			Live!
		</Button>
	);
};

export default Online;
