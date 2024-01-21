const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const jwt = require('jsonwebtoken'); 
const createUser = require('./utils/user/createUser')
const generateToken = require('./utils/user/generateToken.js')

passport.use(new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET_KEY,
  callbackURL: 'http://localhost:5000/auth/google/callback', // Update with your callback URL
  session:false
},
async (accessToken, refreshToken, profile, done) => {
    try {
      const user = await createUser(profile);

      const token = generateToken(user);

      console.log("Authentication Successful");
      return done(null, {token});
      } catch (error) {
        // Handle authentication error
        console.error("Authentication Error:", error);
        return done(error); // Pass the error to the done callback
      }

}));
