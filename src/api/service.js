export function service(method, data, url) {
	let token = sessionStorage.getItem("token"),
		headers= {"Content-Type" : "application/json"};
	if(token) {
		headers.Auth = token;
	}
	if(method==="GET") {
		return fetch(url,{method,headers}).then(req => req.json());
	} else {
		return fetch(url, {
			headers,
			method,
			body:JSON.stringify(data)
		}).then(res => res.json());
	}
}
