import React, { useState } from "react";
import { MdKeyboardArrowRight, MdLogout } from "react-icons/md";

import { NavMenu } from "./NavMenu";
import { UserCard } from "./UserCard";

export const DashboardSidebar = () => {
	const [isExpanded, setIsExpanded] = useState(true);

	return (
		<div
			className={`dashboardSidebar ${
				isExpanded ? "dashboardSidebar--expanded" : "dashboardSidebar--colapsed"
			}`}
		>
			<div className="dashboardSidebar__expander">
				<MdKeyboardArrowRight
					onClick={() => setIsExpanded(!isExpanded)}
					className={`dashboardSidebar__expanderIcon ${
						isExpanded
							? "dashboardSidebar__expanderIcon--expanded"
							: "dashboardSidebar__expanderIcon--colapsed"
					}`}
				/>
			</div>

			<UserCard isExpanded={isExpanded} />

			<NavMenu onClickFunction={() => {}} isExpanded={isExpanded} />

			<div className="dashboardSidebar__exit">
				<button className="dashboardSidebar__exitButton">
					<MdLogout className="dashboardSidebar__exitIcon" />
					<div
						className={`dashboardSidebar__exitLabel ${
							isExpanded
								? "dashboardSidebar__exitLabel--expanded"
								: "dashboardSidebar__exitLabel--colapsed"
						}`}
					>
						Salir
					</div>
				</button>
			</div>
		</div>
	);
};
