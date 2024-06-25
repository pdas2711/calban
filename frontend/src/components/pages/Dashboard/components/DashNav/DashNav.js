import React from "react";
import {NavLink} from "react-router-dom";
import Account from "../../pages/Account/Account.js";

const DashNav = (props) => {
	return <ul className="main-header">
		<li><NavLink to="/dashboard">Projects</NavLink></li>
		<li><NavLink to="/account" element={<Account/>}>Account</NavLink></li>
		</ul>
};

export default DashNav;
