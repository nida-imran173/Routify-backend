const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  enrollNo: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'student', 'driver'],
    required: true,
  },
});

module.exports = mongoose.model('User', UserSchema);
