const Task = require("../models/Task");

// DASHBOARD STATS
exports.getDashboard = async (req, res) => {
  try {
    const totalTasks = await Task.countDocuments({
      assignedTo: req.user.id
    });

    const completed = await Task.countDocuments({
      assignedTo: req.user.id,
      status: "completed"
    });

    const pending = await Task.countDocuments({
      assignedTo: req.user.id,
      status: "pending"
    });

    const inProgress = await Task.countDocuments({
      assignedTo: req.user.id,
      status: "in-progress"
    });

    res.json({
      totalTasks,
      completed,
      pending,
      inProgress
    });
  } catch (err) {
    res.status(500).json(err.message);
  }
};