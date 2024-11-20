const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();
const userRoute = require("./Routes/userRoute");
const eventRoute = require("./Routes/eventRoute");
const adminRoute = require("./Routes/adminRoute");
// dotenv.config();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("<h1>Backend API</h1>");
});
app.use("/api/v1/", userRoute);
app.use("/api/v1/", eventRoute);
app.use("/api/v1/", adminRoute);

async function dbcon() {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
}

dbcon();

app.listen(process.env.PORT, () => {
  console.log(`server is runnig on port ${process.env.PORT}`);
});
