import __registerUser from "./registerUser";
export const registerUser = __registerUser;

import __toggleAuthStatus from "./toggleAuthStatus";
export const toggleAuthStatus = __toggleAuthStatus;

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
