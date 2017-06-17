import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import App from "./components/container/app/app";
import HomePage from "./components/container/home/homePage";
import Login from "./components/container/login/login";
import Register from "./components/container/register/register";
import Profile from "./components/container/profile/profile";
import NotFoundPage from "./components/presentational/notFound/notFoundPage";

const authUser =  function(props) {
	let token = sessionStorage.getItem("token");
	switch(props.match.path) {
		case "/" : return (token ? (<HomePage {...props}/>) : (<Redirect to="/login" />));
		case "/login" : return (token ? (<Redirect to="/" />) : (<Login {...props}/>));
		case "/register": return (token ? (<Redirect to="/" />) : (<Register {...props}/>));
		case "/profile/:id": return (token ? (<Profile {...props} />) : (<Redirect to="/login" />));
	}
};

const routes = (
	<App>
		<Switch>
			<Route name="home" exact path="/" render={authUser} />
			<Route name="profile" exact path="/profile/:id" render={authUser} />
			<Route name="login" exact path="/login" render={authUser} />
			<Route name="register" exact path="/register" render={authUser} />
			<Route component={NotFoundPage} />
		</Switch>
	</App>
);

export default routes;
