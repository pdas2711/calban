const express = require('express');
const loginController = require('../controllers/login-controller');

const router = express.Router();

router.post('/user', loginController.login);
router.post('/get_caldav', loginController.getServerCred);

module.exports = router;
