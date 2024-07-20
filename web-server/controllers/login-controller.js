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
	return res.status(200).json({userId: authUser.id});
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

async function changePassword(req, res, next) {
	const { username, oldPassword, newPassword } = req.body;
	let user;
	try {
		user = await User.findOne({username: username});
	} catch (err) {
		return res.status(500).json({message: 'Something went wrong.'});
	}
	if (!user) {
		return res.status(422).json({message: 'Unable to find "' + user + '"'});
	}
	let isValidPassword = false;
	try {
		if (oldPassword === user.password) {
			isValidPassword = true;
		}
	} catch (err) {
		return res.status(500).json({message: 'Something went wrong.'});
	}
	if (!isValidPassword) {
		return res.status(422).json({message: 'Invalid credentials.'});
	}
	user.password = newPassword;
	user.save();
	res.status(201).json({ message: 'Successfully changed password!' });
}

async function changeServerCreds(req, res, next) {
	const { username, caldavUsername, caldavPassword } = req.body;
	let user;
	try {
		user = await User.findOne({username: username});
	} catch (err) {
		return res.status(500).json({message: 'Something went wrong.'});
	}
	if (!user) {
		return res.status(422).json({message: 'Unable to find "' + user + '"'});
	}
	user.caldav.caldavUsername = caldavUsername;
	user.caldav.caldavPassword = caldavPassword;
	user.save();
	res.status(201).json({ message: 'Successfully changed CalDav credentials!' });
}

exports.login = login;
exports.getServerCred = getServerCred;
exports.changePassword = changePassword;
exports.changeServerCreds = changeServerCreds;
