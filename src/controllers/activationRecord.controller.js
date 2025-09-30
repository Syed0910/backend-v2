const ActivationRecord = require("../models/activationRecord.model");

exports.getAll = async (req, res) => {
  try {
    const data = await ActivationRecord.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const item = await ActivationRecord.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: "Not found" });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const item = await ActivationRecord.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const item = await ActivationRecord.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: "Not found" });

    await item.update(req.body);
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const item = await ActivationRecord.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: "Not found" });

    await item.destroy();
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
