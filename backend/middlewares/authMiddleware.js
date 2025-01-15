const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  
  // Check if the authorization header is present
  if (!authHeader) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  // Extract the token from the "Bearer <token>" format
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Access denied. Token missing." });
  }

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: "Invalid or expired token." });
    }

    // Add the decoded payload to the request object
    req.user = decoded;
    next();
  });
};

module.exports = authenticateToken;
