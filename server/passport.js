// passport-config.js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const jwt = require('jsonwebtoken');
const createUser = require('./utils/user/createUser');

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET_KEY,
      callbackURL: 'http://localhost:5000/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
        try {
          const user = await createUser(profile);
          console.log("Authentication Successful");
          return done(null, { profile });
          } catch (error) {
            // Handle authentication error
            console.error("Authentication Error:", error);
            return done(error); // Pass the error to the done callback
          }
    
    }
  )
);
