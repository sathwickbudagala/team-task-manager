const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
const auth = require("../middleware/auth");

// CREATE TASK
router.post("/", auth, async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.json(task);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// DASHBOARD (IMPORTANT: placed before dynamic routes)
router.get("/dashboard/:email", auth, async (req, res) => {
  try {
    const tasks = await Task.find({ assignedTo: req.params.email });

    const summary = {
      total: tasks.length,
      completed: tasks.filter(t => t.status === "done").length,
      pending: tasks.filter(t => t.status !== "done").length
    };

    res.json(summary);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// GET TASKS BY PROJECT
router.get("/:projectId", auth, async (req, res) => {
  try {
    const tasks = await Task.find({ projectId: req.params.projectId });
    res.json(tasks);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// UPDATE TASK STATUS
router.put("/:id", auth, async (req, res) => {
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
});

module.exports = router;