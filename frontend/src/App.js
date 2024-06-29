import React from "react";
import {BrowserRouter as Router, Routes, Route, Redirect} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import LoginPage from "./components/pages/Login/Login.js";
import Dashboard from "./components/pages/Dashboard/Dashboard.js";
import DashNav from "./components/DashNav/DashNav.js";
import Account from "./components/pages/Dashboard/pages/Account/Account.js";
import ChangePass from "./components/pages/Dashboard/pages/Account/pages/ChangePass/ChangePass.js";

function App() {
	return (
    		<Router>
			<DashNav/>
			<main>
				<Routes>
					<Route path="/" element={<LoginPage/>}/>
					<Route path="/dashboard" element={<Dashboard/>}/>
					<Route path="/account" element={<Account/>}/>
					<Route path="/changepass" element={<ChangePass/>}/>
				</Routes>
			</main>
		</Router>
  	);
}

export default App;
