const User = require('../models/user');

async function login(req, res, next) {
	const {username, password} = req.body;
	let authUser;
	try {
		authUser = await User.findOne({username: username});
	} catch (err) {
		return res.status(500).json({message: 'Something went wrong.'});
	}
	if (!authUser) {
		return res.status(422).json({message: 'Invalid credentials.'});
	}
	let isValidPassword = false;
	try {
		if (password === authUser.password) {
			isValidPassword = true;
		}
	} catch (err) {
		return res.status(500).json({message: 'Something went wrong.'});
	}
	if (!isValidPassword) {
		return res.status(422).json({message: 'Invalid credentials.'});
	}
	return res.json({userId: authUser.id});
}

async function getServerCred(req, res, next) {
	const { username } = req.body;
	let user;
	try {
		user = await User.findOne({username: username});
	} catch (err) {
		return res.status(500).json({message: 'Something went wrong.'});
	}
	if (!user) {
		return res.status(422).json({message: 'Unable to find "' + user + '"'});
	}
	return res.status(200).json(user.caldav);
}

exports.login = login;
exports.getServerCred = getServerCred;
