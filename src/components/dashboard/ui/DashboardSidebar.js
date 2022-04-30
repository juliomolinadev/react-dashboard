import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { MdKeyboardArrowRight, MdLogout } from "react-icons/md";

import { NavMenu } from "./NavMenu";
import { UserCard } from "./UserCard";
import { logout } from "../../../actions/auth/authActions";

export const DashboardSidebar = () => {
	const dispatch = useDispatch();

	const [isExpanded, setIsExpanded] = useState(true);

	return (
		<div
			className={`dashboardSidebar ${
				isExpanded ? "dashboardSidebar--expanded" : "dashboardSidebar--collapsed"
			}`}
		>
			<div className="dashboardSidebar__expander">
				<MdKeyboardArrowRight
					onClick={() => setIsExpanded(!isExpanded)}
					className={`dashboardSidebar__expanderIcon ${
						isExpanded
							? "dashboardSidebar__expanderIcon--expanded"
							: "dashboardSidebar__expanderIcon--collapsed"
					}`}
				/>
			</div>

			<UserCard isExpanded={isExpanded} />

			<NavMenu onClickFunction={() => {}} isExpanded={isExpanded} />

			<div className="dashboardSidebar__exit">
				<button className="dashboardSidebar__exitButton" onClick={() => dispatch(logout())}>
					<MdLogout className="dashboardSidebar__exitIcon" />

					<div
						className={`dashboardSidebar__exitLabel ${
							isExpanded
								? "dashboardSidebar__exitLabel--expanded"
								: "dashboardSidebar__exitLabel--collapsed"
						}`}
					>
						Salir
					</div>
				</button>
			</div>
		</div>
	);
};
