import {combineReducers} from "redux";
import user from "./user";
import isAuthenticated from "./isAuthenticated";
import profileUser from "./profileUser";

const rootReducer = combineReducers({
	user,
	profileUser,
	isAuthenticated
});

export default rootReducer;
