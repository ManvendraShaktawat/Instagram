import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import App from "./components/container/app/app";
import HomePage from "./components/container/home/homePage";
import Login from "./components/container/login/login";
import Register from "./components/container/register/register";
import NotFoundPage from "./components/presentational/notFound/notFoundPage";

const authUser =  function() {
	let user = sessionStorage.getItem("user");
	return (
		user ? (
			<HomePage/>
			) : (
			<Redirect to="/login"/>
		)
	);
};

const routes = (
	<App>
		<Switch>
			<Route name="login" exact path="/login" component={Login} />
			<Route name="home" exact render={authUser} path="/" />
			<Route name="register" exact path="/register" component={Register} />
			<Route component={NotFoundPage} />
		</Switch>
	</App>
);

export default routes;
