const Task = require("../models/Task");

// DASHBOARD STATS
exports.getDashboard = async (req, res) => {
  try {

    const totalTasks = await Task.countDocuments({});

    const completed = await Task.countDocuments({
      status: "Completed"
    });

    const pending = await Task.countDocuments({
      status: "Pending"
    });

    const inProgress = await Task.countDocuments({
      status: "In Progress"
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