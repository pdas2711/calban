import React from "react";

const BoardList = (props) => {
	return (
		<ul className='board-list'>
		{
			props.boardList.map((board) => {
				return <li key={board.boardName}>{board.boardName} {board.description}</li>
			})
		}
		</ul>
	);
};

export default BoardList;
