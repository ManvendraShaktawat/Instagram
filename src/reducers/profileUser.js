import * as types from "../actions/actionTypes";

export default function profileUser(state = {}, action) {
	switch (action.type) {
		case types.PROFILE_USER:
			return action.userData;

		default:
			return state;
	}
}
