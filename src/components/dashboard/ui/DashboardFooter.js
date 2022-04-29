import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdHomeFilled, MdMenu } from "react-icons/md";

import { NavMenu } from "./NavMenu";

export const DashboardFooter = () => {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<nav className="dashboardFooter">
			<div
				className={`dashboardFooter__menu ${
					isExpanded ? "dashboardFooter__menu--expanded" : "dashboardFooter__menu--colapsed"
				}`}
			>
				<NavMenu onClickFunction={setIsExpanded} />
			</div>

			<div className="dashboardFooter__buttons">
				<Link className="dashboardFooter__button" to="/">
					<MdHomeFilled onClick={() => setIsExpanded(false)} />
				</Link>

				<div className="dashboardFooter__button">
					<MdMenu onClick={() => setIsExpanded(!isExpanded)} />
				</div>
			</div>
		</nav>
	);
};
