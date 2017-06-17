import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import routes from "./routes";
import configureStore from "./store/configureStore";
import {Provider} from "react-redux";
import "../public/dependencies/sass/common.scss";
import "../public/dependencies/sass/reset.scss";

//The argument is for activating the Redux devtool extension on browser
const store = configureStore(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>{routes}</BrowserRouter>
	</Provider>, document.getElementById("app")
);
