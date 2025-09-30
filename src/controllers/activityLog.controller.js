const ActivityLog = require("../models/activityLog.model");

exports.getAll = async (req, res) => {
  try {
    const logs = await ActivityLog.findAll();
    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const log = await ActivityLog.findByPk(req.params.id);
    if (!log) return res.status(404).json({ message: "Not found" });
    res.json(log);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newLog = await ActivityLog.create(req.body);
    res.status(201).json(newLog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const log = await ActivityLog.findByPk(req.params.id);
    if (!log) return res.status(404).json({ message: "Not found" });

    await log.update(req.body);
    res.json(log);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const log = await ActivityLog.findByPk(req.params.id);
    if (!log) return res.status(404).json({ message: "Not found" });

    await log.destroy();
    res.json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
