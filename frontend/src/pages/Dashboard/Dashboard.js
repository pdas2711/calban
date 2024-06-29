import React from "react";
import {NavLink} from "react-router-dom";
import NewBoard from "./pages/NewBoard/NewBoard.js";

const Dashboard = (props) => {
	return (
		<div>
			<form>
				<input className="search-textbox" type="text"/> <button type="submit">Search</button>
			</form>
			<br/><br/>
			<NavLink to="/new_board" element={<NewBoard/>}><button type="submit">New Project Board</button></NavLink>
		</div>
	);
}

export default Dashboard;
