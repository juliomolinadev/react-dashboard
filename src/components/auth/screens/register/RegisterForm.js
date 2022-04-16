import React from "react";
import { Link } from "react-router-dom";

export const RegisterForm = () => {
	return (
		<div className="authForm">
			<h2 className="authForm__heading text-center">Registro</h2>

			<form className="form">
				<div className="form__inputGroup">
					<label htmlFor="nombre" className="form__label">
						Nombre:
					</label>
					<input id="nombre" type="nombre" className="form__input" placeholder="Tu nombre" />
				</div>

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

				<div className="form__inputGroup">
					<label htmlFor="password2" className="form__label">
						Confirmar Contraseña:
					</label>
					<input
						id="password2"
						type="password"
						className="form__input"
						placeholder="Tu contraseña de nuevo"
					/>
				</div>

				<button className="form__button" value="Buscar">
					Crear cuenta
				</button>
			</form>

			<p className="authForm__footer text-center">
				Ya tienes cuenta?{" "}
				<Link to="/auth/login" className="authForm__link">
					Iniciar sesión
				</Link>
			</p>
		</div>
	);
};
