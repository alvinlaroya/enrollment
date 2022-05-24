const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;
const db = require("../models");

// MODEL
const Student = db.students;
const Enroll = db.enrolls;

const getAllStudents = async (req, res) => {
  let students = await Student.findAndCountAll({
    order: [["createdAt", "DESC"]],
  });

  res.header("Access-Control-Allow-Origin", "*");
  res.json({
    message: "success",
    allStudents: students,
  });
};

// UPDATE STUDENT
const updateStudent = async (req, res) => {
  const student = req.body;

  await Student.update(student, {
    where: {
      id: req.params.id,
    },
  });

  await Enroll.update(
    {
      b2: req.body.lrn,
      b4: req.body.fname,
      b5: req.body.mname,
      b3: req.body.lname,
      b18: req.body.email,
      b13: req.body.religion,
      a4: req.body.gradeLevel,
      a5: req.body.previousGradeLevel,
    },
    {
      where: {
        b2: req.body.lrn,
      },
    }
  );

  res.sendStatus(200);
};

module.exports = {
  getAllStudents,
  updateStudent,
};
