import React from "react";
import { MdNotifications } from "react-icons/md";

export const DashboardHeader = () => {
	return (
		<div className="dashboardHeader">
			<div className="dashboardHeader__logo">LOGO</div>

			<div className="dashboardHeader__info">
				<MdNotifications />

				<div className="dashboardHeader__userImage">
					<img src="./img/user.jpg" alt="user" />
				</div>
			</div>
		</div>
	);
};
