// Author: Pial Das

import React from "react";
import {BrowserRouter as Router, Routes, Route, Redirect} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import LoginPage from "./pages/Login/Login.js";
import Dashboard from "./pages/Dashboard/Dashboard.js";
import DashNav from "./components/DashNav/DashNav.js";
import Account from "./pages/Dashboard/pages/Account/Account.js";
import ChangePass from "./pages/Dashboard/pages/Account/pages/ChangePass/ChangePass.js";
import NewBoard from "./pages/Dashboard/pages/NewBoard/NewBoard.js";

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
					<Route path="/new_board" element={<NewBoard/>}/>
				</Routes>
			</main>
		</Router>
  	);
}

export default App;
