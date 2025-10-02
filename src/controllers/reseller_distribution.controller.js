const ResellerDistribution = require("../models/reseller_distribution.model");

// Get all
exports.getAll = async (req, res) => {
  try {
    const records = await ResellerDistribution.findAll();
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get by ID
exports.getById = async (req, res) => {
  try {
    const record = await ResellerDistribution.findByPk(req.params.id);
    if (!record) return res.status(404).json({ message: "Not found" });
    res.json(record);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create new record
exports.create = async (req, res) => {
  try {
    const newRecord = await ResellerDistribution.create(req.body);
    res.status(201).json(newRecord);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update record
exports.update = async (req, res) => {
  try {
    const [updated] = await ResellerDistribution.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) return res.status(404).json({ message: "Not found" });
    const updatedRecord = await ResellerDistribution.findByPk(req.params.id);
    res.json(updatedRecord);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete record
exports.delete = async (req, res) => {
  try {
    const deleted = await ResellerDistribution.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
