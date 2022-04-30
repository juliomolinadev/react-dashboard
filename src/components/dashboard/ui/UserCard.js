import React from "react";

export const UserCard = ({ isExpanded }) => {
	return (
		<div className="userCard">
			<div className="userCard__userImage">
				<img src="./img/user.jpg" alt="user" />
			</div>

			<div
				className={`userCard__name ${
					isExpanded ? "userCard__name--expanded" : "userCard__name--collapsed"
				}`}
			>
				Nombre de Usuario
			</div>
		</div>
	);
};
