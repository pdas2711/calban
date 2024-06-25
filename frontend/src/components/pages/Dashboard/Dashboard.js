import React from "react";

const Dashboard = (props) => {
	return (
		<div>
			<form>
				<input className="search-textbox" type="text"/> <button type="submit">Search</button>
			</form>
			<br/><br/>
			<button type="submit">New Project Board</button>
		</div>
	);
}

export default Dashboard;
