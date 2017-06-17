import {combineReducers} from "redux";
import user from "./user";
import isAuthenticated from "./isAuthenticated";

const rootReducer = combineReducers({
	user,
	isAuthenticated
});

export default rootReducer;
