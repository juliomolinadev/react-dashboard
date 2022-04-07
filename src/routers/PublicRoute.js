import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
	//Aqui obtener el usuario autenticado del store
	const user = { logged: false };

	return user.logged ? <Navigate to="/home" /> : children;
};
