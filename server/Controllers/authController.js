const generateToken = require("../utils/user/generateToken.js");
const bcrypt = require('bcryptjs');
const User = require('../mongodb/models/user.js');
const createUser = require('../utils/user/createUser.js')
const CLIENT_URL = process.env.CLIENT_URL;

const loginController = async (req,res) => {

    const { email, password } = req.body;

  try {
    // Check if a user with the provided email exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Invalid email " });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Wrong password" });
    }

    // If the password is correct, generate a JWT token
    const token = generateToken(user);

    // Set the token as a cookie
    res.cookie("jwtToken", token, { maxAge: 60000, httpOnly: true });
    res.cookie("authenticationSuccess", "true", { maxAge: 60000 });
    // Send a success response
    res.json({ success: true, message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Google Callback controller
const googleCallbackController = async (req, res) => {
  try {
    const user = req.user;
    const profile = user.profile;
    
    const userObject = await createUser(profile);
    const token = generateToken(userObject);
    
    res.cookie("jwtToken", token, { maxAge: 60000, httpOnly: true, secure: true });
    res.cookie("authenticationSuccess", "true", { maxAge: 60000, secure: true });
    res.redirect(CLIENT_URL);
  } catch (error) {
    console.error("Unexpected Error:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  loginController,
  googleCallbackController
}