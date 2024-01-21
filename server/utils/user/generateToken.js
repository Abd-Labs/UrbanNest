
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  const { _id, name, email, avatar, allProperties } = user;

  const payload = {
    _id,
    name,
    email,
    avatar,
    // Exclude Google ID and properties from the payload
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

  return token;
};

module.exports = generateToken;
