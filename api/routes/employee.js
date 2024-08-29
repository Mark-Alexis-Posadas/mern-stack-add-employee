const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeControllers"); // adjust the path accordingly

router.get("/get-all-employee", employeeController.getAllEmployee);
router.post("/create-new-employee", employeeController.createNewEmployee);
router.get("/get-single-employee/:id", employeeController.getSingleEmployee); // Note this should be `getSingleEmployee` not `updateEmployee`
router.put("/update-employee/:id", employeeController.updateEmployee); // Note the `put` for updating
router.delete("/delete-employee/:id", employeeController.deleteEmployee);

module.exports = router;
