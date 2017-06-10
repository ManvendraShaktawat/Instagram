import React from "react";
import {Route, Switch} from "react-router-dom";
import App from "./components/container/app/app";
import HomePage from "./components/container/home/homePage";
import Login from "./components/container/login/login";
import Register from "./components/container/register/register";
import NotFoundPage from "./components/presentational/notFound/notFoundPage";

const routes = (
	<App>
		<Switch>
			<Route name="login" exact path="/" component={Login} />
			<Route name="home" exact path="/home" component={HomePage} />
			<Route name="register" exact path="/register" component={Register} />
			<Route component={NotFoundPage} />
		</Switch>
	</App>
);

export default routes;