const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;
const db = require("../models");
const multer = require("multer");
const path = require("path");

// MODEL
const Clearance = db.clearances;

// UPLOAD
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimType && extname) return cb(null, true);
    cb("Dive proper file format to upload");
  },
}).fields([
  { name: "cedula", maxCount: 1 },
  { name: "idPicture", maxCount: 1 },
  { name: "barangayClearance", maxCount: 1 },
  { name: "ort", maxCount: 1 },
]);

// CREATE CLEARANCE
const addClearance = async (req, res) => {
  const {
    fname,
    mname,
    lname,
    address,
    dateOfBirth,
    placeOfBirth,
    age,
    civilStatus,
    citizenship,
    height,
    weight,
    purpose,
    phone,
    numberOfIssued,
    orNumber,
    ctcNumber,
    amount,
    issuedAt,
    issuedOn,
    verified,
  } = req.body;

  let param = {
    fname,
    mname,
    lname,
    address,
    dateOfBirth,
    placeOfBirth,
    age,
    civilStatus,
    citizenship,
    height,
    weight,
    purpose,
    phone,
    orNumber,
    ctcNumber,
    amount,
    issuedAt,
    issuedOn,
    numberOfIssued,
    verified,
    cedula: req.files["cedula"][0].path,
    idPicture: req.files["idPicture"][0].path,
    barangayClearance: req.files["barangayClearance"][0].path,
    ort: req.files["ort"][0].path,
  };

  const clearance = await Clearance.create(param);
  res.status(200).send(clearance);
};

// READ CLEARANCE
const getAllClearances = async (req, res) => {
  /* const { itemsPerPage, pageStart, page, search, category, dateStart, dateEnd } = req.body */

  let clearances = await Clearance.findAndCountAll({
    order: [["createdAt", "DESC"]],
  });

  let verifiedClearances = await Clearance.findAndCountAll({
    where: {
      verified: true,
    },
    order: [["createdAt", "DESC"]],
  });

  res.header("Access-Control-Allow-Origin", "*");
  res.json({
    message: "success",
    allClearance: clearances,
    verifiedClearance: verifiedClearances,
  });
};

// UPDATE CLEARANCE
const updateClearance = async (req, res) => {
  const clearance = req.body;

  await Clearance.update(clearance, {
    where: {
      id: req.params.id,
    },
  });

  res.sendStatus(200);
};

// DELETE CLEARANCE
const deleteClearance = async (req, res) => {
  const { id } = req.body;
  await Clearance.destroy({
    where: {
      id: id,
    },
  });

  res.sendStatus(200);
};

module.exports = {
  addClearance,
  getAllClearances,
  updateClearance,
  deleteClearance,
  upload,
};
