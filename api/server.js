require("dotenv").config();
const express = require("express");
const routes = require("./routes/employee");
const mongoose = require("mongoose");

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/employee", routes);

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
