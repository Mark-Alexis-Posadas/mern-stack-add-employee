const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { Schema } = mongoose;

const loginSchema = Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: { type: String, required: true },
});

loginSchema.pre("save", async (next) => {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.gentSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

loginSchema.methods.matchPassword = async (password) => {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("Login", loginSchema);
