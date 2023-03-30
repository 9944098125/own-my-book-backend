const jwt = require("jsonwebtoken");

exports.generateToken = (payload, expiresIn) => {
  return jwt.sign(payload, process.env.SECRET_TOKEN, {
    expiresIn: expiresIn,
  });
};
