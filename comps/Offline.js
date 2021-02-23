import { Button, Container } from "react-bootstrap";
import styles from "../styles/Layout.module.css";
const Offline = () => {
	return (
		<Button variant="light">
			<div className={styles.offlineCont}>
				<span class={styles.offlineCirlce}></span>
			</div>
			Offline
		</Button>
	);
};
export default Offline;
