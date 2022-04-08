import React from "react";
import { AuthFooter } from "./AuthFooter";
import { AuthHeader } from "./AuthHeader";
import { LoginForm } from "./LoginForm";

export const LoginScreen = () => {
	return (
		<div className="sectionContainer">
			<div>
				<AuthHeader />
				<LoginForm />
			</div>
			<AuthFooter />
		</div>
	);
};
