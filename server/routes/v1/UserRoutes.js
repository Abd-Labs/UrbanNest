const express = require('express');

const { createUser, getAllUsers , getUserByID } = require('../../Controllers/UserControllers');
const authenticateToken = require('../../middlewares/validatejwt');

const router = express.Router();

router.get('/',getAllUsers )
router.get('/:id', getUserByID);


module.exports = router;