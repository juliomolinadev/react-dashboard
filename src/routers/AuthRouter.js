import { Routes, Route } from "react-router-dom";

import { LoginScreen } from "../components/auth/screens/login/LoginScreen";
import { RegisterScreen } from "../components/auth/screens/register/RegisterScreen";

export const AuthRouter = () => {
	return (
		<Routes>
			<Route path="login" element={<LoginScreen />} />
			<Route path="register" element={<RegisterScreen />} />
		</Routes>
	);
};
