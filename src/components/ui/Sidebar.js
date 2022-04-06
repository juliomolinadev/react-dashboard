import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const Sidebar = () => {
	const navigate = useNavigate();
	const name = "julz";

	const handleLogout = () => {
		navigate("/auth/login", { replace: true });
	};

	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
			<Link className="navbar-brand" to="/">
				Home
			</Link>

			<div className="navbar-collapse">
				<div className="navbar-nav">
					<NavLink
						className={({ isActive }) => "nav-item nav-link " + (isActive ? "active" : "")}
						to="/home"
					>
						Home
					</NavLink>

					<NavLink
						className={({ isActive }) => "nav-item nav-link " + (isActive ? "active" : "")}
						to="/section2"
					>
						Section2
					</NavLink>

					<NavLink
						className={({ isActive }) => "nav-item nav-link " + (isActive ? "active" : "")}
						to="/section3"
					>
						Section3
					</NavLink>
				</div>
			</div>

			<div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
				<ul className="navbar-nav ml-auto">
					<span className="nav-item nav-link text-info">{name}</span>
					<button className="nav-item nav-link btn" onClick={handleLogout}>
						Logout
					</button>
				</ul>
			</div>
		</nav>
	);
};
