const caldavRelay = require('./caldav-relay');

async function retrieveCalendarData(request) {
	const boards = await caldavRelay.getBoardsXML(request);
	const boardsList = [];
	const boardResponses = boards.collection.multistatus.response;
	for (let i = 1; i < boardResponses.length; i++) {
		const filterBoardName = boardResponses[i].propstat.prop.displayname;
		const regex = /^\[Calban\] /;
		if (regex.test(filterBoardName)) {
			boardsList.push(boardResponses[i]);
		}
	}
	return {isValid: boards.isValid, boardsList: boardsList};
}

async function getBoards(req, res, next) {
	const boardsRequest = req.body;
	const boards = await retrieveCalendarData(boardsRequest);
	if (!boards.isValid) {
		res.status(500).json({message: 'Error: ' + boards.message});
	}
	res.status(200).json({boardsList: boards.boardsList});
}



async function getTasks(req, res, next) {
	const boardsRequest = req.body;
	const boards = await retrieveCalendarData(boardsRequest);
	if (!boards.isValid) {
		res.status(500).json({message: 'Error: ' + boards.message});
	}
	const boardsList = boards.boardsList;
	let calendarId;
	const checkBoardName = "[Calban] " + boardsRequest.name;
	for (board in boardsList) {
		if (boardsList[board].propstat.prop.displayname == checkBoardName) {
			calendarId = boardsList[board].href;
		}
	}
	const tasksRequest = {
		username: boardsRequest.username,
		password: boardsRequest.password,
		calendarId: calendarId
	};
	const tasks = await caldavRelay.getTasksVCalendar(tasksRequest);
	if (!tasks.isValid) {
		res.status(500).json({message: 'Error: ' + tasks.message});
	}
	const tasksList = [];
	const splitTasks = tasks.collection.split("\r\n");
	let formattedTasks = [];
	let newTask = {};
	let addTaskLine = false;
	for (let i = 1; i < splitTasks.length; i++) {
		if (splitTasks[i] == "END:VTODO") {
			addTaskLine = false;
			formattedTasks.push(newTask);
			newTask = {};
		}
		else if (addTaskLine) {
			newTask[splitTasks[i].split(":")[0]] = splitTasks[i].split(":")[1];
		}
		else if (splitTasks[i] == "BEGIN:VTODO") {
			addTaskLine = true;
		}
	}
	res.status(200).send(formattedTasks);
}

function promoteTask(req, res, next) {
	const {boardName, taskName} = req.body;
}

function demoteTask(req, res, next) {
}

exports.getBoards = getBoards;
exports.getTasks = getTasks;
exports.promoteTask = promoteTask;
exports.demoteTask = demoteTask;
