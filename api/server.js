require("dotenv").config();
const bcrypt = require("bcrypt");

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const routes = require("./routes/employee");
const authRoutes = require("./routes/auth");
const mongoose = require("mongoose");

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
// Middleware
app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//employee route
app.use("/api/employee", routes);

//sign up route
app.use("/auth", authRoutes);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //port
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening of port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
