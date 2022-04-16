import React from "react";

import { AuthFooter } from "../../ui/AuthFooter";
import { AuthHeader } from "../../ui/AuthHeader";
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
