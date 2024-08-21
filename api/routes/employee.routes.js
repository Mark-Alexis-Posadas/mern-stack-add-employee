import express from "express";
const router = express.Router();

// GET all employees
router.get("/", (req, res) => {
  res.send({ message: "hello world" });
});

// POST new employee
router.post("/api/employees", (req, res) => {
  res.send({ message: "create new employee" });
});

// GET single employee
router.get("/api/employees/:id", (req, res) => {
  res.send({ message: "get single employee" });
});

// DELETE single employee
router.delete("/api/employees/:id", (req, res) => {
  res.send({ message: "delete employee" });
});

// UPDATE single employee
router.patch("/api/employees/:id", (req, res) => {
  res.send({ message: "update employee" });
});

export default router;
