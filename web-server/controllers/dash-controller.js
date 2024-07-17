const caldavRelay = require('./caldav-relay');

async function getBoards(req, res, next) {
	const boardsRequest = req.body;
	const boards = await caldavRelay.getBoardsXML(boardsRequest);
	if (!boards.isValid) {
		res.status(500).json({message: 'Error: ' + boards.message});
	}
	const boardsList = []
	const boardResponses = boards.collection.multistatus.response;
	for (let i = 1; i < boardResponses.length; i++) {
		const filterBoardName = boardResponses[i].propstat.prop.displayname;
		const regex = /^\[Calban\] /
		if (regex.test(filterBoardName)) {
			boardsList.push(boardResponses[i]);
		}
	}
	res.status(200).json({boardsList: boardsList});
}

function promoteTask(req, res, next) {
	const {boardName, taskName} = req.body;
}

function demoteTask(req, res, next) {
}

exports.getBoards = getBoards;
exports.promoteTask = promoteTask;
exports.demoteTask = demoteTask;
