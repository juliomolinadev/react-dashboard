import React from "react";
import { NavLink } from "react-router-dom";
import { MdHomeFilled, MdMenu } from "react-icons/md";

export const NavMenu = ({ onClickFunction, isExpanded = true }) => {
	return (
		<div className="navMenu">
			<NavLink
				onClick={() => onClickFunction(false)}
				className={({ isActive }) => "navMenu__link" + (isActive ? " navMenu__active" : "")}
				to="/home"
			>
				<div
					className={`navMenu__label ${
						isExpanded ? "navMenu__label--expanded" : "navMenu__label--colapsed"
					}`}
				>
					Home
				</div>
				<MdHomeFilled className="navMenu__icon" />
			</NavLink>

			<NavLink
				onClick={() => onClickFunction(false)}
				className={({ isActive }) => "navMenu__link" + (isActive ? " navMenu__active" : "")}
				to="/section2"
			>
				<div
					className={`navMenu__label ${
						isExpanded ? "navMenu__label--expanded" : "navMenu__label--colapsed"
					}`}
				>
					Section2
				</div>
				<MdMenu className="navMenu__icon" />
			</NavLink>

			<NavLink
				onClick={() => onClickFunction(false)}
				className={({ isActive }) => "navMenu__link" + (isActive ? " navMenu__active" : "")}
				to="/section3"
			>
				<div
					className={`navMenu__label ${
						isExpanded ? "navMenu__label--expanded" : "navMenu__label--colapsed"
					}`}
				>
					Section3
				</div>
				<MdMenu className="navMenu__icon" />
			</NavLink>
		</div>
	);
};
