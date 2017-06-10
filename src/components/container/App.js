import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
	render() {
		return(
			<div>
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
