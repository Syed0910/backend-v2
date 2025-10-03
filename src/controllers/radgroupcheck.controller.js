// controllers/radGroupCheckController.js
const RadGroupCheck = require("../models/radgroupcheck.model");

// Get all records
exports.getAll = async (req, res) => {
  try {
    const records = await RadGroupCheck.findAll();
    res.json(records);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// Get single record by id
exports.getById = async (req, res) => {
  try {
    const record = await RadGroupCheck.findByPk(req.params.id);
    if (!record) return res.status(404).json({ error: "Not found" });
    res.json(record);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create new record
exports.create = async (req, res) => {
  try {
    const record = await RadGroupCheck.create(req.body);
    res.status(201).json(record);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update record
exports.update = async (req, res) => {
  try {
    const record = await RadGroupCheck.findByPk(req.params.id);
    if (!record) return res.status(404).json({ error: "Not found" });

    await record.update(req.body);
    res.json(record);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete record
exports.remove = async (req, res) => {
  try {
    const record = await RadGroupCheck.findByPk(req.params.id);
    if (!record) return res.status(404).json({ error: "Not found" });

    await record.destroy();
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
