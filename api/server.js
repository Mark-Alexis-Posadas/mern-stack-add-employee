require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// GET all employees
app.get("/", (req, res) => {
  res.send({ message: "hello world" });
});

// POST new employee
app.post("/api/employees", (req, res) => {
  res.send({ message: "create new employee" });
});

// GET single employee
app.get("/api/employees/:id", (req, res) => {
  res.send({ message: "get single employee" });
});

// DELETE single employee
app.delete("/api/employees/:id", (req, res) => {
  res.send({ message: "delete employee" });
});

// UPDATE single employee
app.patch("/api/employees/:id", (req, res) => {
  res.send({ message: "update employee" });
});

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
