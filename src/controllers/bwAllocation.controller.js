const BwAllocation = require("../models/bwAllocation.model");

exports.getAll = async (req, res) => {
  try {
    const data = await BwAllocation.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const item = await BwAllocation.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: "Not found" });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newItem = await BwAllocation.create(req.body);
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const item = await BwAllocation.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: "Not found" });

    await item.update(req.body);
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const item = await BwAllocation.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: "Not found" });

    await item.destroy();
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
