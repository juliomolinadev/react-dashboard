import React from "react";
import { Link, NavLink } from "react-router-dom";

export const AuthHeader = () => {
	return (
		<header className="authHeader">
			<div className="authHeader__bar">
				<Link className="authHeader__logo" to="/auth/login">
					LOGO
				</Link>

				<nav className="authHeader__nav">
					<NavLink
						className={({ isActive }) => "authHeader__link " + (isActive ? "active" : "")}
						to="/auth/login"
					>
						Inicio
					</NavLink>

					<NavLink
						className={({ isActive }) => "authHeader__link " + (isActive ? "active" : "")}
						to="/auth/register"
					>
						Registro
					</NavLink>
				</nav>
			</div>
			<div className="authHeader__text text-center">
				<h1>
					Bienvenido! <span>Descripción del proyecto.</span>
				</h1>
			</div>
		</header>
	);
};
