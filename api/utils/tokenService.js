const jwt = require('jsonwebtoken');
const { SECRET } = require('./constants');

// create a function to issue a new token
exports.issueToekn = async (userData) => {
  const { _id: id } = userData;

  const payload = {
    user: { id }
  }

  return jwt.sign(payload, SECRET);
}