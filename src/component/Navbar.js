import { Link } from "react-router-dom";
import logoBlue from "../imgs/logoBlue.png"
const Navbar = () => {
	return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
				<img src={logoBlue} alt="LOGO" />
				<div className="nav-link">
					<Link to="/">Home</Link>
					<Link
						to="/create"
						style={{
							color: "#fff",
							backgroundColor: "#39a9ff",
							borderRadius: "5px",
						}}
					>
						Add blog
					</Link>
				</div>
			</nav>
	);
};

export default Navbar;
