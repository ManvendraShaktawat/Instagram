import __registerUser from "./registerUser";
export const registerUser = __registerUser;

import {service} from "../api/service";

export function post(data, url) {
	return function () {
		return service("POST", data, url);
	};
}

export function get(url) {
	return function () {
		return service("GET", null, url);
	};
}