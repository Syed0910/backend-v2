const AutoRenewFailedLog = require("../models/autoRenewFailedLog.model");

// GET /api/auto-renew-failed-logs?limit=100
exports.getAll = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit, 10) || null;

    const logs = await AutoRenewFailedLog.findAll({
      limit: limit,
      order: [["created_at", "DESC"]],
    });

    res.json(logs);
  } catch (error) {
    console.error("Error fetching auto-renew-failed-logs:", error);
    res.status(500).json({ error: "Failed to fetch logs." });
  }
};

// GET /api/auto-renew-failed-logs/:id
exports.getById = async (req, res) => {
  try {
    const log = await AutoRenewFailedLog.findByPk(req.params.id);

    if (!log) return res.status(404).json({ message: "Log not found." });

    res.json(log);
  } catch (error) {
    console.error("Error fetching log by ID:", error);
    res.status(500).json({ error: "Failed to fetch log." });
  }
};

// POST /api/auto-renew-failed-logs
exports.create = async (req, res) => {
  try {
    const newLog = await AutoRenewFailedLog.create(req.body);
    res.status(201).json(newLog);
  } catch (error) {
    console.error("Error creating log:", error);
    res.status(500).json({ error: "Failed to create log." });
  }
};

// PUT /api/auto-renew-failed-logs/:id
exports.update = async (req, res) => {
  try {
    const log = await AutoRenewFailedLog.findByPk(req.params.id);

    if (!log) return res.status(404).json({ message: "Log not found." });

    await log.update(req.body);
    res.json(log);
  } catch (error) {
    console.error("Error updating log:", error);
    res.status(500).json({ error: "Failed to update log." });
  }
};

// DELETE /api/auto-renew-failed-logs/:id
exports.remove = async (req, res) => {
  try {
    const log = await AutoRenewFailedLog.findByPk(req.params.id);

    if (!log) return res.status(404).json({ message: "Log not found." });

    await log.destroy();
    res.json({ message: "Log deleted successfully." });
  } catch (error) {
    console.error("Error deleting log:", error);
    res.status(500).json({ error: "Failed to delete log." });
  }
};
