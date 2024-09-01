const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SignUp = require("../models/SignUp");
const Login = require("../models/Login");

const signUp = async (req, res) => {
  const { firstName, middleName, lastName, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new SignUp({
      firstName,
      middleName,
      lastName,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    console.error("Error during sign-up:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { signUp };
