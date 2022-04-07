import React from "react";

export const LoginForm = () => {
	return (
		<div className="authForm container">
			<h2 className="authForm__heading">Inicio de sesión</h2>

			<div className="authForm__form">
				<div className="authForm__input">
					<label htmlFor="email" className="authForm__label">
						Email:
					</label>
					<input id="email" type="email" className="authForm__input" placeholder="Tu email" />
				</div>

				<div className="authForm__input">
					<label htmlFor="password" className="authForm__label">
						Contraseña
					</label>
					<input
						id="password"
						type="Password"
						className="authForm__input"
						placeholder="Tu contraseña"
					/>
				</div>

				<button className="authForm__submit" value="Buscar">
					Iniciar sesión
				</button>
			</div>
		</div>
	);
};
