import * as types from "../actions/actionTypes";

export default function isAuthenticated(state = false, action) {
	switch (action.type) {
		case types.TOGGLE_AUTH_STATUS:
			return !state;

		default:
			return state;
	}
}
