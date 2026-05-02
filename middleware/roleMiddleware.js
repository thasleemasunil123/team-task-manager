module.exports = (role) => {
  return (req, res, next) => {
    try {
      if (!req.user) {
        return res.status(401).json("Unauthorized");
      }

      if (req.user.role !== role) {
        return res.status(403).json("Access denied: Admin only");
      }

      next();
    } catch (err) {
      res.status(500).json(err.message);
    }
  };
};