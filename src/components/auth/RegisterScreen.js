import React from "react";

import { AuthFooter } from "./AuthFooter";
import { AuthHeader } from "./AuthHeader";
import { RegisterForm } from "./RegisterForm";

export const RegisterScreen = () => {
	return (
		<div className="sectionContainer">
			<div>
				<AuthHeader />
				<RegisterForm />
			</div>
			<AuthFooter />
		</div>
	);
};
