import { Routes, Route, BrowserRouter } from "react-router-dom";
import { DashboardScreen } from "../components/dashboard/DashboardScreen";

import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/auth/*"
					element={
						<PublicRoute>
							<AuthRouter />
						</PublicRoute>
					}
				/>

				<Route
					path="/*"
					element={
						<PrivateRoute>
							<DashboardScreen />
						</PrivateRoute>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};
