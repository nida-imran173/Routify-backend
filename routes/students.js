const express = require('express');
const { getAllStudentsController, getStudentByIdController } = require('../controllers/studentController');
const router = express.Router();

// @route   POST api/users/login
router.get('/', getAllStudentsController);
router.get('/:student_id', getStudentByIdController);

module.exports = router;
