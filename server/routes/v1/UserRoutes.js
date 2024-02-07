const express = require('express');

const {createUser, getAllUsers , getUserById } = require('../../Controllers/UserControllers');

const router = express.Router();

router.post('/new',createUser);
router.get('/' ,getAllUsers )
router.get('/:id', getUserById);


module.exports = router