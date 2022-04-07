import React from "react";

export const AuthHeader = () => {
	return (
		<header className="authHeader">
			<div className="authHeader__bar">
				<div className="authHeader__logo">LOGO</div>

				<nav className="authHeader__nav">
					<a className="activo" href="#">
						Inicio
					</a>
					<a href="#">Nosotros</a>
					<a href="#">Contacto</a>
				</nav>
			</div>
			<div className="authHeader__text text-center">
				<h1>
					Bienvenido ! <span>Descripción del proyecto.</span>
				</h1>
			</div>
		</header>
	);
};
