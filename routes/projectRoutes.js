const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { createProject, getProjects } = require("../controllers/projectController");
const roleCheck = require("../middleware/roleMiddleware");

router.post("/", auth, createProject);
router.get("/", auth, getProjects);
router.post("/", auth, roleCheck("admin"), createProject);

module.exports = router;