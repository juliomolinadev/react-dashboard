import { types } from "../../types/types";

export const setPopoverState = (state) => ({
	type: types.setPopoverState,
	payload: state
});

export const collapsePopover = () => ({
	type: types.collapsePopover
});
