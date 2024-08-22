const mongoose = require("mongoose");

const { Schema } = mongoose;

const addEmployeeSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Employee", addEmployeeSchema);
