// const jwt = require("jsonwebtoken");

// module.exports = (req, res, next) => {
//   try {
//     const token = req.headers.authorization;

//     if (!token) {
//       return res.status(401).json("No token");
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     req.user = {
//       id: decoded.id,
//       role: decoded.role
//     };

//     next();
//   } catch (err) {
//     res.status(401).json("Invalid token");
//   }
// };



const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json("No token");
    }

    // REMOVE "Bearer "
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader;

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = {
      id: decoded.id,
      role: decoded.role
    };

    next();

  } catch (err) {
    res.status(401).json("Invalid token format");
  }
};