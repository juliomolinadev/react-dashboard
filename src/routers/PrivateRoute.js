import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
	//Aqui obtener el usuario autenticado del store
	const { user } = useSelector((state) => state.auth);

	return user.logged ? children : <Navigate to="/auth/login" />;
};
