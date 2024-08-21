import express from "express";
import {
  createNewEmpoloyee,
  deleteEmployee,
  getAllEmployee,
  getSingleEmployee,
  updateEmployee,
} from "../controllers/employeeControllers";
const router = express.Router();

// GET all employees
router.get("/", getAllEmployee);
// POST new employee
router.post("/", createNewEmpoloyee);
// GET single employee
router.get("/:id", getSingleEmployee);
// DELETE single employee
router.delete("/:id", deleteEmployee);
// UPDATE single employee
router.patch("/:id", updateEmployee);
export default router;
