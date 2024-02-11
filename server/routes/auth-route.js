const express = require("express");
const passport = require("passport");
const router = express.Router();
const authController = require("../Controllers/authController.js"); // Import the auth controller
const CLIENT_URL = process.env.CLIENT_URL;

const authenticateGoogle = require('../middlewares/googleAuth.js'); // Import the Google authentication middleware

// Destructure the controller functions from authController
const { loginController, googleCallbackController } = authController;

// Login route
router.post("/login", loginController);

// Google Authentication routes
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google Callback route
router.get("/google/callback", authenticateGoogle, googleCallbackController);

module.exports = router;
