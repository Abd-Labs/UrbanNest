const User = require('../mongodb/models/user.js')
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/user/generateToken.js')

const createUser = async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    // Check if password and confirmPassword are present
    if (!password || !confirmPassword) {
        console.log( confirmPassword )
        return res.status(400).json({ error: 'Password and confirm Password are required' });
    }

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
        return res.status(400).json({ error: 'Password and confirm Password do not match' });
    }

    try {
        // Check if a user with the same email already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ error: 'User with this email already exists' });
        }

        // Hash the password before saving it to the database
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user object
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            allProperties: [],
            authType: "regular",
        });

        // Save the user to the database
        await newUser.save();

        // Generate JWT token
        const token = generateToken(newUser);

        res.cookie("jwtToken", token, { maxAge: 60000, httpOnly: true });
        res.cookie("authenticationSuccess", "true", { maxAge: '1hr' });
        // Send the token and a success message back to the client
        res.end()
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
// Controller function to get all users
const getAllUsers = async (req, res) => {
    try {
      // Fetch all users from the database
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
// Controller function to get user by ID
const getUserByID = async (req, res) => {
    const userId = req.params.id; // Assuming ID is sent as a parameter in the request URL
  
    try {
      // Fetch user by ID from the database
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

module.exports = {createUser, getAllUsers , getUserByID};