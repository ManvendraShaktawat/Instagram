import React from "react";
import {Link} from "react-router-dom";
import "./header.scss";
import * as userUrl from "../../../constants/apiNames";

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.toggleDropdown = this.toggleDropdown.bind(this);
		this.clearSession = this.clearSession.bind(this);
		this.searchPeople = this.searchPeople.bind(this);
		this.toggleLogoutDropdown = this.toggleLogoutDropdown.bind(this);
	}

	componentDidMount() {
		document.addEventListener("click", function(event) {
			let mingleDropdown = document.querySelector(".mingle-dropdown");
			let burgerMenu = document.querySelector(".nav-unauth .fa");
			if(event.target !== burgerMenu) {
				if(mingleDropdown.style.display !== "none") {
					mingleDropdown.classList.remove("l-display-block");
				}
			}
		});
	}

	searchPeople(event) {
		if(event.target.value.length > 2) {
			this.props.actions.get(userUrl.apiNames.USERS + "/" + event.target.value).
				then((res) => {
					if(res.error) {
						console.log("Unable to search people");
					}
				});
		}
	}

	toggleLogoutDropdown() {
		this.logoutDropdown.classList.toggle("d-none");
	}

	clearSession() {
		sessionStorage.clear();
		this.props.history.push("/login");
	}

	toggleDropdown() {
		this.unauthNavItemList.classList.toggle("l-display-block");
	}

	render() {
		let navigationBar,
				searchBox,
				logo,
				isLoggedIn = sessionStorage.getItem("user");

		if(isLoggedIn) {
			logo = (
				<div className="d-none d-md-inline-block float-left">
					<img src="/assets/images/mingle-logo.jpg" />
				</div>
			);
			navigationBar = (
				<nav className="nav-auth d-flex align-items-center col-4">
					<Link to="/profile/" className="nav-user-info">
						<img src="/assets/images/nav-avatar.png" />
						<span>Manvendra</span>
					</Link>
					<ul>
						<li><span className="fa fa-users" /></li>
						<li><span className="fa fa-bell" /></li>
					</ul>
					<div className="logout-dropdown-container">
						<span className="fa fa-sort-down" onClick={this.toggleLogoutDropdown} />
						<ul ref={(el) => this.logoutDropdown = el} className="d-none">
							<li><span onClick={this.clearSession}>Logout</span></li>
						</ul>
					</div>
				</nav>
			);
			searchBox = (
				<div className="input-group float-left">
					<input type="text" className="form-control" placeholder="Search people" onChange={this.searchPeople} />
					<span className="fa fa-search navbar-toggler-right" />
				</div>
			);
		} else {
			logo = (
				<div className="float-left">
					<img src="/assets/images/mingle-logo.jpg" />
				</div>
			);
			navigationBar = (
				<nav className="nav-unauth d-flex align-items-center col-4">
					<i className="fa fa-bars" onClick={this.toggleDropdown} />
					<ul ref={(el)=>{this.unauthNavItemList = el;}} className="mingle-dropdown">
						<li>
							<Link to="/login">Sign in</Link>
						</li>
						<li>
							<Link to="/register">Sign up</Link>
						</li>
					</ul>
				</nav>
			);
		}

		return (
			<div className="container l-header">
				<div className="d-flex align-items-center col-12 offset-sm-1 col-sm-10 l-padding-none">
					<div className="l-search-container col-4">
						{logo}
						{searchBox}
					</div>
					<div className="l-mingle-text col-4">
						<Link to="/">
							<img src="/assets/images/mingle.png" />
						</Link>
					</div>
					{navigationBar}
				</div>
			</div>
		);
	}
}

export default Header;
