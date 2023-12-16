const express = require('express');

const {getAllUsers , createUser, getUserById } = require('../../Controllers/UserControllers');

const router = express.Router();



module.exports = router