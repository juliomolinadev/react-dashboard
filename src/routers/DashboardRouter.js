import { Routes, Route } from "react-router-dom";

import { Sidebar } from "../components/ui/Sidebar";
import { HomeScreen } from "../components/sections/home/HomeScreen";
import { Section2Screen } from "../components/sections/section2/Section2Screen";
import { Section3Screen } from "../components/sections/section3/Section3Screen";

export const DashboardRouter = () => {
	return (
		<>
			<Sidebar />

			<div className="container">
				<Routes>
					<Route path="home" element={<HomeScreen />} />
					<Route path="section2" element={<Section2Screen />} />
					<Route path="section3" element={<Section3Screen />} />
					<Route path="/" element={<HomeScreen />} />
				</Routes>
			</div>
		</>
	);
};
