const RestrictedConnection = require("../models/restricted_connection.model");

// Get all
exports.getAll = async (req, res) => {
  try {
    const records = await RestrictedConnection.findAll();
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get by ID
exports.getById = async (req, res) => {
  try {
    const record = await RestrictedConnection.findByPk(req.params.id);
    if (!record) return res.status(404).json({ message: "Not found" });
    res.json(record);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create new record
exports.create = async (req, res) => {
  try {
    const newRecord = await RestrictedConnection.create(req.body);
    res.status(201).json(newRecord);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update record
exports.update = async (req, res) => {
  try {
    const [updated] = await RestrictedConnection.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) return res.status(404).json({ message: "Not found" });
    const updatedRecord = await RestrictedConnection.findByPk(req.params.id);
    res.json(updatedRecord);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete record
exports.delete = async (req, res) => {
  try {
    const deleted = await RestrictedConnection.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
