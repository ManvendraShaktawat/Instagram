import React from "react";
import PropTypes from "prop-types";
import "./app.scss";

class App extends React.Component {
	render() {
		return(
			<div id="container">
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
