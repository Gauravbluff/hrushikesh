const express = require("express");
const router = express.Router();
const { getUser, userSignup, userLogin } = require("../controllers/user");

// Get all the users
router.get("/", getUser);

// User Sign Up Route
router.post("/signup", userSignup);

// User Login Route
router.post("/login", userLogin);

module.exports = router;
