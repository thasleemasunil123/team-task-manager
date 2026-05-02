const Project = require("../models/Project");

// CREATE PROJECT (Admin)
exports.createProject = async (req, res) => {
  try {
    const project = await Project.create({
      ...req.body,
      createdBy: req.user.id
    });

    res.json(project);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// GET PROJECTS
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find({
      members: req.user.id
    });

    res.json(projects);
  } catch (err) {
    res.status(500).json(err.message);
  }
};