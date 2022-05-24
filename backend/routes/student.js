require("dotenv").config();
const jwt = require("jsonwebtoken");
const studentController = require("../controllers/student.js");

const router = require("express").Router();

// routes
router.get("/getAllStudents", studentController.getAllStudents);
router.patch("/updateStudent/:id", studentController.updateStudent);

/* function middleware(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.SECRET_JWT_KEY, (err, user) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
} */

module.exports = router;
