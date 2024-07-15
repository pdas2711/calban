import React from "react";
import {NavLink} from "react-router-dom";
import Dashboard from "../../pages/Dashboard/Dashboard.js";
import Account from "../../pages/Dashboard/pages/Account/Account.js";

const DashNav = (props) => {
	return <ul className="main-header">
		<li><NavLink to="/dashboard" element={<Dashboard/>}>Projects</NavLink></li>
		<li><NavLink to="/account" element={<Account/>}>Account</NavLink></li>
		</ul>
};

export default DashNav;
