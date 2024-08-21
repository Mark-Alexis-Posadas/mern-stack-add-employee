require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

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
