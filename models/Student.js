const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  student_id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  semester: {
    type: Number,
    required: true
  },
  bus_id: {
    type: String,
    required: true
  },
  stop_id: {
    type: String,
    required: true
  }
});

const Student = mongoose.model('Student', studentSchema, 'Students');

module.exports = Student;
