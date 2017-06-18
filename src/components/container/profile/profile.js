import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../../../actions";
import * as userUrl from "../../../constants/apiNames";
import "./profile.scss";

class Profile extends React.Component {

  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.actions.get(userUrl.apiNames.USESR_PROFILE + "/" + this.props.match.params.id)
      .then(res => {
        this.props.actions.profileUser(res);
      });
  }

	render() {
		return(
      <div className="container">
        <div className="row">
          <div className="l-profile offset-1 col-10 offset-sm-2 col-sm-8 offset-lg-3 col-lg-6 offset-xl-2 col-xl-8">
            <div className ="row profile-banner">
              <div className="col-xl-12 profile-name">
                  {this.props.profileUser.firstName} {this.props.profileUser.lastName}
              </div>
              <div className="offset-xl-0 col-xl-4">
                <img className="profile-pic" src="/assets/images/avatar.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
		);
	}
}
function mapStateToProps(state) {
  return {
    profileUser: state.profileUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

