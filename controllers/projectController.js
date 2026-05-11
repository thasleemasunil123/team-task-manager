const Project = require("../models/Project");

// CREATE PROJECT
exports.createProject = async (req, res) => {
  try {

    const project = await Project.create({
      title: req.body.title,
      description: req.body.description,
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

    const projects = await Project.find()
      .populate("createdBy", "name email");

    res.json(projects);

  } catch (err) {
    res.status(500).json(err.message);
  }
};