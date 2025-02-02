const express = require("express");
const cors = require("cors");
const classifyRoutes = require("./routes/classifyRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", classifyRoutes);

module.exports = app