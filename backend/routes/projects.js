const express = require("express");
const router = express.Router();
const Project = require("../models/Project");
const auth = require("../middleware/auth");

// CREATE PROJECT
router.post("/", auth, async (req, res) => {
  try {
    const { name, description, createdBy } = req.body;

    const project = await Project.create({
      name,
      description,
      createdBy,
      members: [createdBy]
    });

    res.json(project);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// GET ALL PROJECTS
router.get("/", auth, async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;