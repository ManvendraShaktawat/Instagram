import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {bindActionCreators} from "redux";
import * as actions from "../../../actions";
import PropTypes from "prop-types";
import Header from "../header/header";
import "./app.scss";

class App extends React.Component {
	render() {
		return(
			<div id="mainContainer">
				<Header {...this.props} />
				<div className="col-12 offset-sm-1 col-sm-10 l-padding-none">
					{this.props.children}
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
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
