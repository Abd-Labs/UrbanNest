const express = require('express');

const {  getAllUsers , getUserByID } = require('../../Controllers/UserControllers');
const authenticateToken = require('../../middlewares/validatejwt');

const router = express.Router();

router.get('/', authenticateToken, getAllUsers )
router.get('/:id', authenticateToken, getUserByID);


module.exports = router;