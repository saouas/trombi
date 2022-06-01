const express = require('express');
const router = express.Router();
const systemController = require('../controllers/system.controller.js');

/*
** GET
*/

router.get('/', systemController.getHealthCheck);

/*
** POST
*/

module.exports = router;
