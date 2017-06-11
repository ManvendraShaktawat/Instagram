import React from "react";
import {Link} from "react-router-dom";
import "./header.scss";

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.toggleDropdown = this.toggleDropdown.bind(this);
	}

	toggleDropdown() {
		console.log(this.navList)
		this.navList.classList.toggle("l-display-block");
	}

	render() {
		return (
			<div className="container l-header-wrapper">
				<div className="row">
					<div className="l-header col-12">
						<div className="row">
							<div className="l-logo col-3 col-sm-4">
								<img src="/assets/images/favicon.ico" />
							</div>
							<div className="l-mingle-text col-6 col-sm-4">
								<img src="/assets/images/mingle8.png" />
							</div>
							<nav className="col-3 col-sm-4">
								<i className="fa fa-bars" onClick={this.toggleDropdown}></i>
								<ul ref={(el)=>{this.navList = el;}}>
									<li>
										<Link to="/login">Sign in</Link>
									</li>
									<li>
										<Link to="/register">Sign up</Link>
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