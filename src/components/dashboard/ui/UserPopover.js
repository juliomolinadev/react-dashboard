import React from "react";
import { MdKeyboardArrowRight, MdSettings, MdLogout } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { UserCard } from "./UserCard";
import { collapsePopover } from "../../../actions/dashboard/dashboardActions";
import { logout } from "../../../actions/auth/authActions";

export const UserPopover = () => {
	const dispatch = useDispatch();

	const handleExit = () => {
		dispatch(logout());
		dispatch(collapsePopover());
	};

	return (
		<div className="userPopover">
			<MdKeyboardArrowRight className="userPopover__arrow" />

			<UserCard isExpanded={true} />

			<Link to="/settings">
				<button
					className="userPopover__button userPopover__button--settings"
					onClick={() => dispatch(collapsePopover())}
				>
					<MdSettings className="userPopover__icon" />
					Settings
				</button>
			</Link>

			<button className="userPopover__button userPopover__button--exit" onClick={handleExit}>
				<MdLogout className="userPopover__icon" />
				Salir
			</button>
		</div>
	);
};
