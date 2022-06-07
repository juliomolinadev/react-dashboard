import React from "react";
import { NavLink } from "react-router-dom";
import { MdHomeFilled, MdMenu, MdSettings } from "react-icons/md";

export const NavMenu = ({ onClickFunction, isExpanded = true }) => {
	const sections = [
		{
			pad: "/home",
			label: "Home",
			icon: MdHomeFilled
		},
		{
			pad: "/section2",
			label: "Section2",
			icon: MdMenu
		},
		{
			pad: "/section3",
			label: "Section3",
			icon: MdMenu
		},
		{
			pad: "/settings",
			label: "Settings",
			icon: MdSettings
		}
	];

	return (
		<div className="navMenu">
			{sections.map((section) => (
				<NavLink
					key={section.label}
					onClick={() => onClickFunction(false)}
					className={({ isActive }) => "navMenu__link" + (isActive ? " navMenu__active" : "")}
					to={section.pad}
				>
					<div
						className={`navMenu__label ${
							isExpanded ? "navMenu__label--expanded" : "navMenu__label--collapsed"
						}`}
					>
						{section.label}
					</div>
					<section.icon className="navMenu__icon" />
				</NavLink>
			))}
		</div>
	);
};
