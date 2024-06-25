import React from "react";
import {NavLink} from "react-router-dom";
import ChangePass from "./pages/ChangePass/ChangePass.js";

const Account = (props) => {
	return <ul className="acc-opt">
		<li><NavLink to="/changepass" element={<ChangePass/>}>Change Password</NavLink></li>
		</ul>
};

export default Account;
