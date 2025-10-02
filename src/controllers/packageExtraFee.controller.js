const PackageExtraFee = require("../models/packageExtraFee.model");

// GET all
exports.getAll = async (req, res) => {
  try {
    const data = await PackageExtraFee.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET by ID
exports.getById = async (req, res) => {
  try {
    const record = await PackageExtraFee.findByPk(req.params.id);
    if (!record) return res.status(404).json({ message: "Record not found" });
    res.json(record);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST create
exports.create = async (req, res) => {
  try {
    const created = await PackageExtraFee.create(req.body);
    res.status(201).json(created);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT update
exports.update = async (req, res) => {
  try {
    const record = await PackageExtraFee.findByPk(req.params.id);
    if (!record) return res.status(404).json({ message: "Record not found" });

    await record.update(req.body);
    res.json(record);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
exports.remove = async (req, res) => {
  try {
    const record = await PackageExtraFee.findByPk(req.params.id);
    if (!record) return res.status(404).json({ message: "Record not found" });

    await record.destroy();
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
