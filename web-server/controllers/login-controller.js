const bcrypt = require('bcryptjs');

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
		isValidPassword = await bcrypt.compare(password, authUser.password);
	} catch (err) {
		return res.status(500).json({message: 'Something went wrong.'});
	}
	if (!isValidPassword) {
		return res.status(422).json({message: 'Invalid credentials.'});
	}
	return res.json({userId: authUser.id});
}

exports.login = login;
