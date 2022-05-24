const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;
const db = require("../models");

// MODEL
const Student = db.students;

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

// UPDATE CASE
/* const updateCase = async (req, res) => {
  const clearance = req.body;

  await Case.update(clearance, {
    where: {
      id: req.params.id,
    },
  });

  res.sendStatus(200);
};
 */
module.exports = {
  getAllStudents,
};
