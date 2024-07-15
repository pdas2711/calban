import React, {useState} from "react";
import {NavLink} from "react-router-dom";

const NewBoard = (props) => {
	const [boardName, setBoardName] = useState();
	const [description, setDescription] = useState();
	const addBoardHandler = event => {
		event.preventDefault();
		const addBoard = {
			boardName: boardName,
			description: description
		};
		props.onBoardAdd(addBoard);
	};
	const setBoardNameChangeHandler = event => {
		setBoardName(event.target.value);
	};
	const setDescriptionChangeHandler = event => {
		setDescription(event.target.value);
	};
	return (
		<div>
			<form className="new-board" onSubmit={addBoardHandler}>
				Board Name: <input className="add-board-textbox" type="text" value={boardName} onChange={setBoardNameChangeHandler}/><br/>
				Description: <input className="add-board-textbox" type="text" value={description} onChange={setDescriptionChangeHandler}/><br/><br/>
				<button type="submit">Add Board</button>
			</form>
		</div>
	);
};

export default NewBoard;
