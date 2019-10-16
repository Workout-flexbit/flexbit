const jwt = require("jsonwebtoken");
const { SECRET } = require("./constants");


// If we're not using `await` we don't need to use async, it could be misleading to other devs reading over your code
// and might cause hard-to-debug bugs!
exports.issueToken = async userData => {
  const { _id: id } = userData;

  const payload = {
    user: {
      id
    }
  };

  return jwt.sign(payload, SECRET);
};

// verify tokens
exports.verifyToken = async token => {
  return jwt.verify(token, SECRET);
};

// create method to decode
exports.decodeToken = async token => {
  return jwt.decode(token, SECRET);
};
