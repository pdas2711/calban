import React, {useState} from "react";
import {Link} from "react-router-dom";
import NewBoard from "./pages/NewBoard/NewBoard.js";
import BoardList from "./components/BoardList/BoardList.js";

const Dashboard = (props) => {
	const [boards, addBoards] = useState([]);
	const addBoardHandler = (newBoard) => {
		addBoards(boards.concat(newBoard));
	};
	return (
		<div>
			<form>
				<input className="search-textbox" type="text"/> <button type="submit">Search</button>
			</form>
			<br/><br/>
			<NewBoard onBoardAdd={addBoardHandler}/>
			<BoardList boardList={boards}/>
		</div>
	);
};

export default Dashboard;
