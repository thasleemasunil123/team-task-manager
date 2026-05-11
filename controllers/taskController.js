const Task = require("../models/Task");

// CREATE TASK
exports.createTask = async (req, res) => {
  try {

    const task = await Task.create({
      title: req.body.title,
      status: req.body.status || "Pending",
      assignedTo: req.user.id
    });

    res.json(task);

  } catch (err) {
    res.status(500).json(err.message);
  }
};

// GET TASKS
exports.getTasks = async (req, res) => {
  try {

    const tasks = await Task.find({});

    res.json(tasks);

  } catch (err) {
    res.status(500).json(err.message);
  }
};

// UPDATE TASK
exports.updateTask = async (req, res) => {
  try {

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(task);

  } catch (err) {
    res.status(500).json(err.message);
  }
};