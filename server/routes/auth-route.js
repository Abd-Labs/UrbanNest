const express = require("express");
const passport = require("passport");
const router = express.Router();
const loginController = require("../Controllers/loginController")
const CLIENT_URL = process.env.CLIENT_URL;
const createUser = require('../utils/user/createUser')
const generateToken = require('../utils/user/generateToken.js')

// Login route
router.post("/login", loginController);


// Google Authentication routes
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/google/callback", async (req, res, next) => {
  passport.authenticate(
    "google",
    { failureRedirect: CLIENT_URL, session: false },
    async (err, user) => {
      try {
        if (err) {
          // Handle authentication error
          console.error("Authentication Error:", err);
          throw err;
        }

        const profile = user.profile;

        const userObject = await createUser(profile);
        const token = generateToken(userObject);

        res.cookie("jwtToken", token, { maxAge: 3600000, httpOnly: true , secure: true });
        res.cookie("authenticationSuccess", "true", { maxAge: 3600000, secure:true });
        res.redirect(CLIENT_URL);
      } catch (error) {
        // Handle any unexpected error
        console.error("Unexpected Error:", error);
        res.status(500).send("Internal Server Error");
      }
    }
  )(req, res, next);
});


module.exports = router;
