import { Link } from "react-router-dom";
import Search from "./cars/Search";

export default function Navbar() {
	return (
		<nav className="navbar">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand"><img src="/logo.png" alt="logo"></img></Link>

				<div className="navbar-content">
					<ul className="navbar-list">
						<li className="navbar-item">
							<Link to="/cars/builder/g70/1" className="navbar-link">G70</Link>
						</li>

						<li className="navbar-item">
							<Link to="/cars/builder/g80/1" className="navbar-link">G80</Link>
						</li>

						<li className="navbar-item navbar-search">
							<Search></Search>
						</li>
					</ul>
				</div>

				<button type="button" className="navbar-toggler"></button>
			</div>
		</nav>
	)
}
