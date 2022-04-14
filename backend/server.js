const express = require("express");
const cors = require("cors");

const app = express();
// middleware

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// routers
const userRoutes = require("./routes/user.js");
const enrollRoutes = require("./routes/enroll.js");

app.use("/api/user", userRoutes);
app.use("/api/enroll/", enrollRoutes);

// static images folder
app.use("/images", express.static("./images"));

// api

app.get("/", (req, res) => {
  res.json({ message: "hello from api" });
});

const PORT = process.env.PORT || 7000;

// server

app.listen(PORT, () => {
  console.log(`server running in port ${PORT}`);
});
