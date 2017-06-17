import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import App from "./components/container/app/app";
import HomePage from "./components/container/home/homePage";
import Login from "./components/container/login/login";
import Register from "./components/container/register/register";
import NotFoundPage from "./components/presentational/notFound/notFoundPage";

const authUser =  function(props) {
	let user = sessionStorage.getItem("user");
	return (
		user ? ( <HomePage {...props} /> ) : ( <Redirect to="/login"/> )
	);
};

const loginRouteHandler =  function(props) {
	let user = sessionStorage.getItem("user");
	return (
		user ? ( <Redirect to="/"/> ) : ( <Login {...props}/> )
	);
};

const registerRouteHandler =  function(props) {
	let user = sessionStorage.getItem("user");
	return (
		user ? ( <Redirect to="/"/> ) : ( <Register {...props}/> )
	);
};

const routes = (
	<App>
		<Switch>
			<Route name="home" exact path="/" render={authUser} />
			<Route name="login" exact path="/login" render={loginRouteHandler} />
			<Route name="register" exact path="/register" render={registerRouteHandler} />
			<Route component={NotFoundPage} />
		</Switch>
	</App>
);

export default routes;
