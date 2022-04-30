import { Routes, Route } from "react-router-dom";

import { HomeSection } from "../components/dashboard/sections/home/HomeSection";
import { Section2Screen } from "../components/dashboard/sections/section2/Section2Screen";
import { Section3Screen } from "../components/dashboard/sections/section3/Section3Screen";
import { SettingsSection } from "../components/dashboard/sections/settings/SettingsSection";
import { NotificationsSection } from "../components/dashboard/sections/notifications/NotificationsSection";

export const DashboardRouter = () => {
	return (
		<div className="container">
			<Routes>
				<Route path="home" element={<HomeSection />} />
				<Route path="section2" element={<Section2Screen />} />
				<Route path="section3" element={<Section3Screen />} />
				<Route path="settings" element={<SettingsSection />} />
				<Route path="notifications" element={<NotificationsSection />} />
				<Route path="/" element={<HomeSection />} />
			</Routes>
		</div>
	);
};
