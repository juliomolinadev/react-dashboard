import React from "react";
import { MdNotifications } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setPopoverState } from "../../../actions/dashboard/dashboardActions";

export const DashboardHeader = () => {
	const { userPopoverExpanded } = useSelector((state) => state.dashboard);
	const dispatch = useDispatch();

	return (
		<div className="dashboardHeader">
			<div className="dashboardHeader__logo">LOGO</div>

			<div className="dashboardHeader__info">
				<Link to="/notifications">
					<MdNotifications className="dashboardHeader__icon" />
				</Link>

				<div
					className="dashboardHeader__userImage"
					onClick={() => dispatch(setPopoverState(!userPopoverExpanded))}
				>
					<img src="./img/user.jpg" alt="user" />
				</div>
			</div>
		</div>
	);
};
