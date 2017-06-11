import React from "react";
import {Link} from "react-router-dom";
import "./header.scss";

class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container l-header-wrapper">
				<div className="row">
					<div className="l-header col-xs-12">
						<div className="row">
							<div className="l-logo col-xs-2">
								<img src="/assets/images/favicon.ico" />
								<img src="/assets/images/mingle.png" />
							</div>
							<nav className="col-xs-offset-6 col-xs-2">
								<ul>
									<li>
										<Link to="/login">Login</Link>
									</li>
									<li>
										<Link to="/register">Register</Link>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;