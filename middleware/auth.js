const jwt = require("jsonwebtoken");

exports.authUser = async (req, res, next) => {
  try {
    const tmp = req.header("Authorization");
    const token = tmp && tmp.slice(7, tmp.length);
    if (!token)
      return res.status(404).json({ message: "You do not have any token" });
    jwt.verify(token, process.env.SECRET_TOKEN, (err, user) => {
      if (err) return res.status(400).json({ message: "Invalid Token" });
      req.user = user;
      next();
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
