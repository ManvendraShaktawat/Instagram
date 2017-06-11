import React from "react";
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
    this.props.actions.getData(userUrl.apiNames.USERS+"/"+this.email.value)
      .then(() => this.props.history.push("/home"));
  }

	render() {
		return(
      <div className="container">
        <div className="row">
          <div className="l-login col-xs-offset-2 col-xs-8 col-sm-offset-3 col-sm-6 col-lg-offset-4 col-lg-4">
            <form>
              <div className="row">
                <div className="col-xs-12">
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
                <div className="col-xs-12">
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
                <div className="col-xs-12">
                  <div className="checkbox">
                    <label><input type="checkbox" name="remember" /> Remember me</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
		);
	}
}

export default Login;
