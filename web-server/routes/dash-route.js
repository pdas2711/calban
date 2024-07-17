const express = require('express');
const dashController = require('../controllers/dash-controller');

const router = express.Router();

router.post('/get_boards', dashController.getBoards);
router.post('/promote_task', dashController.promoteTask);
router.post('/demote_task', dashController.demoteTask);

module.exports = router;
