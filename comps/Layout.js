import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";
export default function Layout({ children }) {
	return (
		<div className="layoutCont">
			<Navbar />
			{children}
			<Footer />
		</div>
	);
}
