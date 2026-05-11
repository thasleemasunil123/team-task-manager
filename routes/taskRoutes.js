const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
  createTask,
  getTasks,
  updateTask
} = require("../controllers/taskController");

// CREATE TASK
router.post("/", auth, createTask);

// GET TASKS
router.get("/", auth, getTasks);

// UPDATE TASK
router.put("/:id", auth, updateTask);

module.exports = router;