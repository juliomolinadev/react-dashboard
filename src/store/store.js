import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";

import { authReducer } from "../reducers/auth/authReducer";
import { dashboardReducer } from "../reducers/dashboard/dashboardReducer";

const composeEnhancers =
	(typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
	auth: authReducer,
	dashboard: dashboardReducer
});

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
