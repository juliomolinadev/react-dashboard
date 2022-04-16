import React from "react";

import { AuthHeader } from "../../ui/AuthHeader";
import { LoginForm } from "./LoginForm";
import { AuthFooter } from "../../ui/AuthFooter";

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
