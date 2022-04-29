import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
	//Aqui obtener el usuario autenticado del store
	const { user } = useSelector((state) => state.auth);

	return user.logged ? <Navigate to="/home" /> : children;
};
