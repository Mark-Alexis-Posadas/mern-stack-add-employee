const mongoose = require("mongoose");

const { Schema } = mongoose;
const SignUpSchema = Schema({
  firstName: String,
  middleName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

module.exports = mongoose.model("SignUp", SignUpSchema);
