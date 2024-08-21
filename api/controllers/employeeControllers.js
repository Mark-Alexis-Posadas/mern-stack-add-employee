const Employee = require("../models/Employee");

const getAllEmployee = async (req, res) => {
  Employee.find()
    .then((employee) => res.json(employee))
    .catch((err) =>
      res.status(404).json({ noEmployeeFound: "No Books found" })
    );
};

const createNewEmpoloyee = async (req, res) => {};
const getSingleEmployee = async (req, res) => {};
const deleteEmployee = async (req, res) => {};
const updateEmployee = async (req, res) => {};

module.exports = {
  getAllEmployee,
  createNewEmpoloyee,
  getSingleEmployee,
  deleteEmployee,
  updateEmployee,
};
