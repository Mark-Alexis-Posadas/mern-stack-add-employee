const Employee = require("../models/Employee");

const getAllEmployee = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createNewEmployee = async (req, res) => {
  const { firstName, middleName, lastName, email } = req.body;
  try {
    const employee = await Employee.create({
      firstName,
      middleName,
      lastName,
      email,
    });
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getSingleEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await Employee.findById(id);
    if (!employee)
      return res.status(404).json({ message: "Employee not found" });
    res.json(employee);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    const employee = await Employee.findByIdAndDelete(id);
    if (!employee)
      return res.status(404).json({ message: "Employee not found" });
    res.json({ message: "Employee deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    const employee = await Employee.findByIdAndUpdate(id, updates, {
      new: true,
    });
    if (!employee)
      return res.status(404).json({ message: "Employee not found" });
    res.json(employee);
  } catch (err) {
    console.log("Error updating employee:", err.message);
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllEmployee,
  createNewEmployee,
  getSingleEmployee,
  deleteEmployee,
  updateEmployee,
};
