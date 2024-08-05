const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const token = req.header;
  if (!token)
    return res.status(401).json({ error: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = decoded.id;
    next();
  } catch (error) {
    res.status(400).json({ error: "Token is not valid" });
  }
};

module.exports = authMiddleware;
