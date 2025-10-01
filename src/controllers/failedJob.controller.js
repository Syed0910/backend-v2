const FailedJob = require("../models/failedJob.model");

exports.getAll = async (req, res) => {
  try {
    const jobs = await FailedJob.findAll();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const job = await FailedJob.findByPk(req.params.id);
    if (!job) return res.status(404).json({ message: "FailedJob not found" });
    res.json(job);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const job = await FailedJob.create(req.body);
    res.status(201).json(job);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const job = await FailedJob.findByPk(req.params.id);
    if (!job) return res.status(404).json({ message: "FailedJob not found" });

    await job.update(req.body);
    res.json(job);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const job = await FailedJob.findByPk(req.params.id);
    if (!job) return res.status(404).json({ message: "FailedJob not found" });

    await job.destroy();
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
