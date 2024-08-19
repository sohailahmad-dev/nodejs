const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
})

const Student = mongoose.model('students', StudentSchema);

module.exports = Student;