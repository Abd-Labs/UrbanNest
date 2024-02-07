const generateToken = require("../utils/user/generateToken");
const bcrypt = require('bcryptjs');
const User = require('../mongodb/models/user');
module.exports = loginController = async (req,res) => {

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
    res.cookie("jwtToken", token, { maxAge: 3600000, httpOnly: true });
    res.cookie("authenticationSuccess", "true", { maxAge: 3600000 });
    // Send a success response
    res.json({ success: true, message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}