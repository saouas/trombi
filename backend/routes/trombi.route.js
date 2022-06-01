const express = require('express');
const router = express.Router();
const trombiController = require('../controllers/trombi.controller.js');

/*
** GET
*/

router.get('/users', trombiController.getUsers);

/*
** POST
*/

module.exports = router;
