import React from "react";
import { DashboardRouter } from "../../routers/DashboardRouter";
import { DashboardHeader } from "./ui/DashboardHeader";
import { DashboardFooter } from "./ui/DashboardFooter";
import { DashboardSidebar } from "./ui/DashboardSidebar";
import { UserPopover } from "./ui/UserPopover";
import { useSelector } from "react-redux";

export const DashboardScreen = () => {
	const isMobile = window.innerWidth < 768 ? true : false;
	// const isMobile = window.innerWidth < 1024 ? true : false;

	const { userPopoverExpanded } = useSelector((state) => state.dashboard);

	return (
		<div className="dashboardScreen">
			{!isMobile && <DashboardSidebar />}

			<div className="dashboardScreen__main">
				<DashboardHeader />
				<DashboardRouter />
				{isMobile && <DashboardFooter />}
			</div>

			{userPopoverExpanded && <UserPopover />}
		</div>
	);
};
