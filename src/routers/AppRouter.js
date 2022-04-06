import { Routes, Route, BrowserRouter } from "react-router-dom";

import { AuthRouter } from "./AuthRouter";
import { DashboardRouter } from "./DashboardRouter";
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
							<DashboardRouter />
						</PrivateRoute>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};
