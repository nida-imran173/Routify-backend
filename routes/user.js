const express = require('express');
const router = express.Router();
const { loginUser } = require('../controllers/userController');

// @route   POST api/users/login
router.post('/login', loginUser);

module.exports = router;
