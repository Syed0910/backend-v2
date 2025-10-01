const NasDetails = require("../models/nasDetails.model");

exports.getAll = async (req, res) => {
  try {
    const records = await NasDetails.findAll();
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const record = await NasDetails.findByPk(req.params.id);
    if (!record) return res.status(404).json({ message: "Record not found" });
    res.json(record);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newRecord = await NasDetails.create(req.body);
    res.status(201).json(newRecord);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const record = await NasDetails.findByPk(req.params.id);
    if (!record) return res.status(404).json({ message: "Record not found" });

    await record.update(req.body);
    res.json(record);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const record = await NasDetails.findByPk(req.params.id);
    if (!record) return res.status(404).json({ message: "Record not found" });

    await record.destroy();
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
