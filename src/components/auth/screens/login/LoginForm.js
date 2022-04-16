import React from "react";
import { Link } from "react-router-dom";

export const LoginForm = () => {
	return (
		<div className="authForm">
			<h2 className="authForm__heading text-center">Inicio de sesión</h2>

			<form className="form">
				<div className="form__inputGroup">
					<label htmlFor="email" className="form__label">
						Email:
					</label>
					<input id="email" type="email" className="form__input" placeholder="Tu email" />
				</div>

				<div className="form__inputGroup">
					<label htmlFor="password" className="form__label">
						Contraseña:
					</label>
					<input
						id="password"
						type="password"
						className="form__input"
						placeholder="Tu contraseña"
					/>
				</div>

				<button className="form__button" value="Buscar">
					Iniciar Sesión
				</button>
			</form>

			<p className="authForm__footer text-center">
				No tienes cuenta?{" "}
				<Link to="/auth/register" className="authForm__link">
					Registro
				</Link>
			</p>
		</div>
	);
};
