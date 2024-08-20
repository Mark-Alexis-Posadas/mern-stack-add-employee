const express = require("express");

const app = express();
const PORT = 5000;

//GET all employess
app.get("/", (req, res) => {
  res.send({ message: "hello world" });
});

//POST new employee
app.post("/api/employees", (req, res) => {
  res.send({ message: "create new employee" });
});

//GET single employee
app.get("/api/employess:id", (req, res) => {
  res.send({ message: "get single employee" });
});

//DELETE single employee
app.delete("/api/employess:id", (req, res) => {
  res.send({ message: "delete employee" });
});

//UPDATE single employee
app.patch("/api/employess:id", (req, res) => {
  res.send({ message: "update employee" });
});

app.listen(PORT, () => {
  console.log("server is running", PORT);
});
