import mongoose from "mongoose";

const { Schema } = mongoose;

const addEmployeeSchema = new Schema({
  _id: {
    type: Number,
    required,
  },
  firstName: {
    type: String,
    required,
  },
  middleName: {
    type: String,
    required,
  },
  lastName: {
    type: String,
    required,
  },

  email: {
    type: String,
    required,
  },
});

module.exports = mongoose.model("Employee", addEmployeeSchema);
