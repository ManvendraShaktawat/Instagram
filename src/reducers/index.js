import {combineReducers} from "redux";
import user from "./user";
import profileUser from "./profileUser";

const rootReducer = combineReducers({
	user,
	profileUser
});

export default rootReducer;
