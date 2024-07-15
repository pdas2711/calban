const express = require('express');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/users-routes');

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

app.use('/api/users', usersRoutes);

app.use((error, req, res,next) => {
        if(res.headerSent) {
            return next(error);
        }
        res.status(error.code || 500);  
        res.json({message: error.message || 'Internal error.'});
});

app.listen(3001);
