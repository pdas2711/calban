const {XMLValidator, XMLParser} = require('fast-xml-parser');
const http = require('http');

function getBoardsXML(request) {
	return new Promise(function(resolve, reject) {
		const username = request.username;
		const password = request.password;
		const auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');
		const reqOptions = {
			host: 'localhost',
			port: 5233,
			path: '/' + username,
			method: 'PROPFIND',
			headers: {
				'Content-Type': 'application/xml',
				'Depth': 'infinity',
				'Authorization': auth
			},
			body: '<d:propfind xmlns:d="DAV:" xmlns:cs="https://calendarserver.org/ns/"><d:prop><d:resourcetype /><d:displayname /></d:prop></d:propfind>'
		};

		let boardsRetrieved;
		http.request(reqOptions, res => {
			let data = '';
			res.on('data', chunk => {
				data += chunk;
			})
			res.on('end', () => {
				boardsRetrieved = data;
				const isValidXML = XMLValidator.validate(boardsRetrieved);
				if (!isValidXML) {
					console.log("Not valid. " + isValidXML.err);
					resolve({isValid: false, message: 'Not valid XML.'});
				}
				const xmlParser = new XMLParser();
				const boardsList = xmlParser.parse(boardsRetrieved);
				resolve({collection: boardsList, isValid: true, message: 'Successfully parsed response.'});
			})
		}).on('error', err => {
			console.log('Error when sending request to CalDav server:', err.message);
			reject({isValid: false, message: 'Error when sending request to CalDav server.'});
		}).end();
	});
}

function getTasksVCalendar(request) {
	return new Promise(function(resolve, reject) {
		const username = request.username;
		const password = request.password;
		const userCalendarId = request.calendarId;
		const auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');
		const reqOptions = {
			host: 'localhost',
			port: 5233,
			path: '/' + userCalendarId,
			method: 'GET',
			headers: {
				'Content-Type': 'application/xml',
				'Depth': 'infinity',
				'Authorization': auth
			}
			//body: '<d:propfind xmlns:d="DAV:" xmlns:cs="https://calendarserver.org/ns/"><d:prop><d:resourcetype /><d:displayname /></d:prop></d:propfind>'
		};
		let tasksRetrieved;
		http.request(reqOptions, res => {
			let data = '';
			res.on('data', chunk => {
				data += chunk;
			})
			res.on('end', () => {
				tasksRetrieved = data;
				resolve({collection: tasksRetrieved, isValid: true});
			})
		}).on('error', err => {
			console.log('Error when sending request to CalDav server:', err.message);
			reject({isValid: false, message: 'Error when sending request to CalDav server.'});
		}).end();
	});
}

exports.getBoardsXML = getBoardsXML;
exports.getTasksVCalendar = getTasksVCalendar;
