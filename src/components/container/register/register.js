import React from "react";
import InputField from "../../presentational/inputField/inputField";
import "./register.scss";

class Register extends React.Component {
  render() {
    return(
      <div className="l-register col-xs-offset-2 col-xs-8 col-sm-offset-3 col-sm-6 col-lg-offset-4 col-lg-4">
        <form action="/action_page.php">
          <InputField
            type="email"
            placeholder="Enter email"
            name="email"
            label="Email:"
          />
          <InputField
            type="password"
            placeholder="Enter password"
            name="pwd"
            label="Password:"
          />
          <div className="checkbox">
            <label><input type="checkbox" name="remember" /> Remember me</label>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    );
  }
}

export default Register;
