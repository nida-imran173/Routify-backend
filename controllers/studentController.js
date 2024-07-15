const Student = require("../models/Student");

//* Method:GET endpoint: api/students?page=1&limit=10
exports.getAllStudentsController = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const data = await Student.find().skip(skip).limit(limit);
    const totalStudents = await Student.countDocuments();

    if (data.length === 0) {
      return res.status(404).send("No Students found");
    } else {
      return res.status(200).json({
        totalStudents,
        page,
        limit,
        totalPages: Math.ceil(totalStudents / limit),
        students: data,
      });
    }
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).send(error.message);
  }
};

//* Method:GET endpoint: api/students/10048
exports.getStudentByIdController = async (req, res) => {
  try {
    const { student_id } = req.params;

    const student = await Student.findOne({ student_id });

    if (!student) {
      return res.status(404).send("Student not found");
    } else {
      return res.status(200).json(student);
    }
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).send(error.message);
  }
};
