const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/google/callback", (req, res, next) => {
  console.log(req.headers.origin);
  passport.authenticate(
    "google",
    { failureRedirect: "http://localhost:3000", session: false },
    (err, user) => {
      try {
        if (err) {
          // Handle authentication error
          console.error("Authentication Error:", err);
          throw err;
        }

        if (!user || !user.token) {
          // Handle missing user or token
          console.error("Authentication Error: Missing user or token");
          throw new Error("Authentication Error: Missing user or token");
        }

        const token = user.token;
        res.cookie("jwtToken", token, { maxAge: 3600000, httpOnly: true });
        res.cookie("authenticationSuccess", "true", { maxAge: 3600000 });
        res.redirect(`http://localhost:3000`);
      } catch (error) {
        // Handle any unexpected error
        console.error("Unexpected Error:", error);
        res.status(500).send("Internal Server Error");
      }
    }
  )(req, res, next);
});

module.exports = router;
