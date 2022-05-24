/* require("dotenv").config(); */
/* const jwt = require("jsonwebtoken"); */
const enroll = require("../controllers/enroll");

const router = require("express").Router();

// routes
router.post("/exportEnroll", enroll.exportEnroll);
router.post("/addEnroll", enroll.upload, enroll.addEnroll);
router.get("/getEnrolls", enroll.getAllEnrolls);
router.post("/getEnrollsByBarangay", enroll.getAllEnrollsByBarangay);
router.post("/exportToCsvByBarangay", enroll.exportToCsvByBarangay);
router.post("/exportToCsvByGradeLevel", enroll.exportToCsvByGradeLevel);
router.patch("/updateEnrollStatus/:id", enroll.updateEnrollStatus);
router.get("/getEnrollsPerLevel/:level", enroll.getAllEnrollsPerLevel);
/* router.get("/getClearances", middleware, clearance.getAllClearances);
router.put("/updateClearance/:id", clearance.updateClearance);
router.delete("/deleteClearance", clearance.deleteClearance); */

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
