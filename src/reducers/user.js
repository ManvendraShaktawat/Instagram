import * as types from "../actions/actionTypes";

export default function courseReducer(state = [], action) {
	switch (action.type) {
		case types.REGISTER_USER:
			return [
				...state,
				action.userData
			];

		default:
			return state;
	}
}
