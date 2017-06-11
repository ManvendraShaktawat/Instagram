import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header";
import "./app.scss";

class App extends React.Component {
	render() {
		return(
			<div id="mainContainer">
				<Header/>
				<div>
					{this.props.children}
				</div>
			</div>
		);
	}
}

App.propTypes = {
	children: PropTypes.object.isRequired
};

export default App;
