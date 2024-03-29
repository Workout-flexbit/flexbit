"use strict";

const tokenService = require("../utils/tokenService");

module.exports = async (req, res, next) => {
  const headers = req.headers;

  if (!headers) {
    next(new Error("invalid request, please add header with your request"));
  } else {
    const authHeader = headers.authorization;

    if (!authHeader) {
      next(new Error("invalid request"));
    } else {
      try {
        const [prefix, token] = authHeader.split(" ");
        const decoded = await tokenService.verifyToken(token);
        if (decoded) {
          req.token = decoded;
          next();
        } else {
          next(new Error("you are not authorized"));
        }
      } catch (e) {
        console.error(e);
      }
    }
  }
};

// fetch('/', {
//   body: {
//     headers: {
//       'Authorization': 'Bearer token...'
//     }
//   }
// })
