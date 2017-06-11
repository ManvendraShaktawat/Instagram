import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../../../actions";
import InputField from "../../presentational/inputField/inputField";
import * as userUrl from "../../../constants/apiNames";
import "./register.scss";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.getUserData = this.getUserData.bind(this);
  }

  getUserData(event) {
    event.preventDefault();
    let userData = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      password: this.password.value,
      email: this.email.value,
      gender: this.gender.value,
      dob: this.dateOfBirth.value,
      mobileNumber: this.phoneNumber.value
    };

    this.props.actions.post(userData, userUrl.apiNames.USERS)
      .then(() => {
        this.props.history.push("/home");
      });
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="l-register col-xs-offset-2 col-xs-8 col-sm-offset-3 col-sm-6 col-lg-offset-4 col-lg-4">
            <form>
              <div className="row">
                <div className="col-xs-6">
                  <InputField
                    parentContext={this}
                    type="text"
                    placeholder="Enter firstname"
                    name="firstName"
                    label="First Name:"
                  />
                </div>
                <div className="col-xs-6">
                  <InputField
                    parentContext={this}
                    type="text"
                    placeholder="Enter lastname"
                    name="lastName"
                    label="Last Name:"
                  />
                </div>
              </div>
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
                    name="password"
                    label="Password:"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <InputField
                    parentContext={this}
                    type="password"
                    placeholder="Enter confirm password"
                    name="confirmPassword"
                    label="Confirm Password:"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-xs-12">
                  <label htmlFor="gender">Gender:</label>
                  <select name="gender" ref={(el)=>{this.gender = el;}} id="gender" className="form-control">
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <InputField
                    parentContext={this}
                    type="date"
                    name="dateOfBirth"
                    label="Date of Birth:"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <InputField
                    parentContext={this}
                    type="number"
                    name="phoneNumber"
                    placeholder="Enter phone number"
                    label="Phone Number:"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <button type="submit" className="btn btn-primary col-xs-12" onClick={this.getUserData}>Submit</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Register);