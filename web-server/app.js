const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const loginRoute = require('./routes/login-route');
const dashMainRoute = require('./routes/dash-route');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Headers', 
		'Origin, X-Requested-With, Content-Type, Accept, Authorization');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
	next();
});

app.use('/api/login', loginRoute);
app.use('/api/dash', dashMainRoute);

app.use((error, req, res,next) => {
        if(res.headerSent) {
            return next(error);
        }
        res.status(error.code || 500);  
        res.json({message: error.message || 'Internal error.'});
});

const mongo_url = 'mongodb+srv://<REDACTED>';

mongoose.connect(mongo_url).then(function() {
	app.listen(3001);
}).catch(function(err) {
	console.log(err);
});
