import React from "react";
import {BrowserRouter as Router, Routes, Route, Redirect} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import LoginPage from "./components/Login/pages/Login.js";
import Dashboard from "./components/Dashboard/Dashboard.js";

function App() {
	return (
    		<Router>
			<main>
				<Routes>
					<Route path="/" element={<LoginPage/>}/>
					<Route path="/dashboard" element={<Dashboard/>}/>
				</Routes>
			</main>
		</Router>
  	);
}

export default App;
