import { types } from "../../types/types";

const initialState = {
	userPopoverExpanded: false
};

export const dashboardReducer = (state = { ...initialState }, action) => {
	switch (action.type) {
		case types.setPopoverState:
			return {
				...state,
				userPopoverExpanded: action.payload
			};

		case types.collapsePopover:
			return {
				...state,
				userPopoverExpanded: false
			};

		default:
			return state;
	}
};
