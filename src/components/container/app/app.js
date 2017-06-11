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
					{React.cloneElement(this.props.children, this.props)}
				</div>
			</div>
		);
	}
}

App.propTypes = {
	children: PropTypes.object.isRequired
};

export default App;
