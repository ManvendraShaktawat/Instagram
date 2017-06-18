import * as types from "./actionTypes";

export default function profileUser(userData) {
	return {
		type: types.PROFILE_USER,
		userData
	};
}