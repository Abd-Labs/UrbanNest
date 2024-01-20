const User = require('../mongodb/models/user.js')

const getAllUsers = async (req, res) => {res.send("Started")}
const getUserById = async (req, res) => {}

module.exports = { getAllUsers , getUserById};
