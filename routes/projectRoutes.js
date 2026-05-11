const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const roleCheck = require("../middleware/roleMiddleware");

const {
  createProject,
  getProjects
} = require("../controllers/projectController");

// CREATE PROJECT (Admin only)
router.post(
  "/",
  auth,
  roleCheck("admin"),
  createProject
);

// GET PROJECTS
router.get(
  "/",
  auth,
  getProjects
);

module.exports = router;