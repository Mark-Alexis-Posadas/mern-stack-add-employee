const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const authenticationController = require("../controllers/authenticationController");

router.post("/sign-up", authenticationController.signUp);

module.exports = router;
