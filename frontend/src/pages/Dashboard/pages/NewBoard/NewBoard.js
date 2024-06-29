import React, {useState} from "react";

const NewBoard = props => {
	const [boardName, setBoardName] = useState();
	const [description, setDescription] = useState();
	const addBoardHandler = event => {
	};
	return (
		<div>
			<form className="new-board" onSubmit={addBoardHandler}>
				Board Name: <input className="add-board-textbox" type="text" value={boardName}/><br/>
				Description: <input className="add-board-textbox" type="text" value={description}/><br/><br/>
				<button type="submit">Add Board</button>
			</form>
		</div>
	);
};

export default NewBoard;
