import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../../../actions";
import InputField from "../../presentational/inputField/inputField";
import * as userUrl from "../../../constants/apiNames";
import "./login.scss";

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.getLoginData = this.getLoginData.bind(this);
  }

  getLoginData(event) {
    event.preventDefault();
    this.props.actions.get(userUrl.apiNames.USERS+"/"+this.email.value+"/"+this.pwd.value)
      .then((res) => {
        if(res.error) {
          console.log(res.error);
        } else {
          this.props.history.push("/home");
        }
      });
  }

	render() {
		return(
      <div className="container">
        <div className="row">
          <div className="l-login offset-1 col-10 offset-sm-2 col-sm-8 offset-lg-3 col-lg-6 offset-xl-4 col-xl-4">
            <form className="card">
              <div className="row">
                <div className="col-12">
                  <h1>Sign in</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <InputField
                    parentContext={this}
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    label="Email:"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <InputField
                    parentContext={this}
                    type="password"
                    placeholder="Enter password"
                    name="pwd"
                    label="Password:"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="checkbox">
                    <label><input type="checkbox" name="remember" /> Remember me</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button type="submit" onClick={this.getLoginData} className="btn btn-primary col-12">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
		);
	}
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
