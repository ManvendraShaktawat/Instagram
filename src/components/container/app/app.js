import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../../../actions";
import "./app.scss";

class App extends React.Component {
	render() {
		return(
			<div id="container">
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

function mapStateToProps(state) {
	return {
		courses: state.user
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
