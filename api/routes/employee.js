const express = require("express");
const {
  createNewEmployee,
  deleteEmployee,
  getAllEmployee,
  getSingleEmployee,
  updateEmployee,
} = require("../controllers/employeeControllers");

const router = express.Router();

// GET all employees
router.get("/get-all-employee", getAllEmployee);

// POST new employee
router.post("/create-new-employee", createNewEmployee);

// GET single employee
router.get("/get-single-employee/:id", getSingleEmployee);

// DELETE single employee
router.delete("/delete-employee/:id", deleteEmployee);

// UPDATE single employee
router.patch("/update-employee/:id", updateEmployee);

module.exports = router;
