// Import csv-writer
const csvwriter = require("csv-writer");
const Vonage = require("@vonage/server-sdk");
const vonage = new Vonage({
  apiKey: process.env.VONAGE_API_KEY,
  apiSecret: process.env.VONAGE_API_SECRET,
});
var createCsvWriter = csvwriter.createObjectCsvWriter;

const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;
const db = require("../models");
const multer = require("multer");
const path = require("path");

// MODEL
const Enroll = db.enrolls;

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
  { name: "f1", maxCount: 1 },
  { name: "f2", maxCount: 1 },
  { name: "f3", maxCount: 1 },
  { name: "f4", maxCount: 1 },
]);

// CREATE CLEARANCE
const addEnroll = async (req, res) => {
  const {
    a1,
    a2,
    a3,
    a4,
    a5,
    a6,
    a7,
    a8,
    a9,
    a10,
    a11,
    a12,
    a13,
    a14,
    a15,
    a16,
    b1,
    b2,
    b3,
    b4,
    b5,
    b6,
    b7,
    b8,
    b9,
    b10,
    b11,
    b12,
    b13,
    b14,
    b15,
    b16,
    b17,
    b18,
    b20,
    b21,
    b22,
    b23,
    b24,
    c1,
    c2,
    c3,
    c4,
    c5,
    c6,
    c7,
    c8,
    c9,
    c10,
    d1,
    d2,
    d3,
    d4,
    d5,
    d6,
    d7,
    e1,
    e2,
  } = req.body;

  let param = {
    a1,
    a2,
    a3,
    a4,
    a5,
    a6,
    a7,
    a8,
    a9,
    a10,
    a11,
    a12,
    a13,
    a14,
    a15,
    a16,
    b1,
    b2,
    b3,
    b4,
    b5,
    b6,
    b7,
    b8,
    b9,
    b10,
    b11,
    b12,
    b13,
    b14,
    b15,
    b16,
    b17,
    b18,
    b20,
    b21,
    b22,
    b23,
    b24,
    c1,
    c2,
    c3,
    c4,
    c5,
    c6,
    c7,
    c8,
    c9,
    c10,
    d1,
    d2,
    d3,
    d4,
    d5,
    d6,
    d7,
    e1,
    e2,
    f1: req.files["f1"][0].path,
    f3: req.files["f3"][0].path,
  };

  const from = "Vonage APIs";
  const to = `639${c6}`;
  const text = `Good Day Mr./Mrs. ${c4} your son/daughter ${b4} ${b5} ${b3} has submitted his/her enrollment application in DEFEMNHS on ${new Date().toLocaleString(
    "default",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }
  )}`;

  vonage.message.sendSms(from, to, text, (err, responseData) => {
    if (err) {
      console.log(err);
    } else {
      if (responseData.messages[0]["status"] === "0") {
        console.log("Message sent successfully.");
      } else {
        console.log(
          `Message failed with error: ${responseData.messages[0]["error-text"]}`
        );
      }
    }
  });

  let hasLRN = await Enroll.findOne({
    where: {
      b2: b2,
    },
  });

  if (hasLRN) {
    res.status(200).json({
      status: "error",
      message: "LRN is already taken",
    });
  } else {
    const enroll = await Enroll.create(param);
    res.status(200).send(enroll);
  }
};

const exportToCsvByBarangay = async (req, res) => {
  const { results, barangay } = req.body;
  const strUnderscores = barangay.replaceAll(" ", "_");

  const csvWriter = createCsvWriter({
    // Output csv file name is geek_data
    path: `${strUnderscores}.csv`,
    header: [
      // Title of the columns (column_names)
      { id: "id", title: "ID" },
      { id: "b4", title: "NAME" },
      { id: "b5", title: "MNAME" },
      { id: "b3", title: "LNAME" },
    ],
  });

  csvWriter
    .writeRecords(results)
    .then(() => console.log("Data uploaded into csv successfully"));
};

// READ CLEARANCE
const getAllEnrolls = async (req, res) => {
  /* const { itemsPerPage, pageStart, page, search, category, dateStart, dateEnd } = req.body */

  let enrolls = await Enroll.findAndCountAll({
    order: [["createdAt", "DESC"]],
  });

  let enrolled = await Enroll.findAndCountAll({
    where: {
      enrolled: true,
    },
  });

  let enrolledGrade7 = await Enroll.findAndCountAll({
    where: {
      enrolled: true,
      a4: 7,
    },
  });

  let enrolledGrade8 = await Enroll.findAndCountAll({
    where: {
      enrolled: true,
      a4: 8,
    },
  });

  let enrolledGrade9 = await Enroll.findAndCountAll({
    where: {
      enrolled: true,
      a4: 9,
    },
  });

  let enrolledGrade10 = await Enroll.findAndCountAll({
    where: {
      enrolled: true,
      a4: 10,
    },
  });

  let enrolledGrade11 = await Enroll.findAndCountAll({
    where: {
      enrolled: true,
      a4: 11,
    },
  });

  let enrolledGrade12 = await Enroll.findAndCountAll({
    where: {
      enrolled: true,
      a4: 12,
    },
  });

  res.header("Access-Control-Allow-Origin", "*");
  res.json({
    message: "success",
    allEnroll: enrolls,
    enrolled: enrolled,
    enrolledGrade7: enrolledGrade7,
    enrolledGrade8: enrolledGrade8,
    enrolledGrade9: enrolledGrade9,
    enrolledGrade10: enrolledGrade10,
    enrolledGrade11: enrolledGrade11,
    enrolledGrade12: enrolledGrade12,
  });
};

const getAllEnrollsByBarangay = async (req, res) => {
  const { barangay } = req.body;
  let enrolls = await Enroll.findAndCountAll({
    where: {
      b21: {
        [Op.like]: `%${barangay}%`,
      },
    },
    order: [["createdAt", "DESC"]],
  });

  res.header("Access-Control-Allow-Origin", "*");
  res.json({
    message: "success",
    allEnrollByBarangay: enrolls,
  });
};

const getAllEnrollsPerLevel = async (req, res) => {
  const level = req.params.level;

  let enrolls = await Enroll.findAndCountAll({
    where: {
      a4: level,
    },
    order: [["createdAt", "DESC"]],
  });

  res.header("Access-Control-Allow-Origin", "*");
  res.json({
    message: "success",
    allEnroll: enrolls,
  });
};

const updateEnrollStatus = async (req, res) => {
  const data = req.body;

  await Enroll.update(
    {
      enrolled: !data.enrolled,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  if (!data.enrolled) {
    const from = "Vonage APIs";
    const to = `639${data.c6}`;
    const text = `Good Day Mr./Mrs. ${data.c4}, the enrollment status of your son/daugther ${data.b4} ${data.b5} ${data.b3}in DEFEMNHS is now confirmed.`;

    vonage.message.sendSms(from, to, text, (err, responseData) => {
      if (err) {
        console.log(err);
      } else {
        if (responseData.messages[0]["status"] === "0") {
          console.log("Message sent successfully.");
        } else {
          console.log(
            `Message failed with error: ${responseData.messages[0]["error-text"]}`
          );
        }
      }
    });
  }

  res.sendStatus(200);
};

module.exports = {
  addEnroll,
  getAllEnrolls,
  getAllEnrollsByBarangay,
  getAllEnrollsPerLevel,
  exportToCsvByBarangay,
  updateEnrollStatus,
  upload,
};
