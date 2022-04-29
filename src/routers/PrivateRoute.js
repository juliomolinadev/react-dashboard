import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
	//Aqui obtener el usuario autenticado del store
	const user = { logged: true };

	return user.logged ? children : <Navigate to="/auth/login" />;
};
