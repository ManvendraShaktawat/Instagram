import * as types from "./actionTypes";

export default function registerUser(userData) {
	return {
		type: types.REGISTER_USER,
		userData
	};
}