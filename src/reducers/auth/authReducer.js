import { types } from "../../types/types";

export const authReducer = (state = { user: { logged: false } }, action) => {
	switch (action.type) {
		case types.login:
			// return {
			// 	uid: action.payload.uid,
			// 	name: action.payload.displayName
			// };
			return { user: { logged: true } };

		case types.logout:
			return { user: { logged: false } };

		default:
			return state;
	}
};
