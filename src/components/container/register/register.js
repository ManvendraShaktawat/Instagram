import React from "react";
import InputField from "../../presentational/inputField/inputField";
import "./register.scss";

class Register extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="l-register col-xs-offset-2 col-xs-8 col-sm-offset-3 col-sm-6 col-lg-offset-4 col-lg-4">
            <form action="/action_page.php">
              <div className="row">
                <div className="col-xs-6">
                  <InputField
                    type="text"
                    placeholder="Enter firstname"
                    name="firstName"
                    label="First Name:"
                  />
                </div>
                <div className="col-xs-6">
                  <InputField
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
                  <select name="gender" id="gender" className="form-control">
                    <option>Select</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <InputField
                    type="date"
                    name="dateOfBirth"
                    label="Date of Birth:"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <InputField
                    type="number"
                    name="phoneNumber"
                    placeholder="Enter phone number"
                    label="Phone Number:"
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
                  <button type="submit" className="btn btn-primary col-xs-12">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
