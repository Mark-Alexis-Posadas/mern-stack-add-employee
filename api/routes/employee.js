const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeControllers");

router.get("/get-all-employee", employeeController.getAllEmployee);
router.post("/create-new-employee", employeeController.createNewEmployee);
router.get("/get-single-employee/:id", employeeController.getSingleEmployee);
router.put("/update-employee/:id", employeeController.updateEmployee);
router.delete("/delete-employee/:id", employeeController.deleteEmployee);

module.exports = router;
