const express = require('express');
const loginController = require('../controllers/login-controller');

const router = express.Router();

router.post('/user', loginController.login);
router.post('/get_caldav', loginController.getServerCred);
router.post('/change_password', loginController.changePassword);
router.post('/change_caldav_creds', loginController.changeServerCreds);

module.exports = router;
