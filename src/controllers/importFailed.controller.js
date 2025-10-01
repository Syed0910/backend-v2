
const ImportFailed = require("../models/importFailed.model");

exports.getAll = async (req, res) => {
  try {
    const failedImports = await ImportFailed.findAll();
    res.json(failedImports);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const record = await ImportFailed.findByPk(req.params.id);
    if (!record) return res.status(404).json({ message: "ImportFailed record not found" });
    res.json(record);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newRecord = await ImportFailed.create(req.body);
    res.status(201).json(newRecord);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const record = await ImportFailed.findByPk(req.params.id);
    if (!record) return res.status(404).json({ message: "ImportFailed record not found" });

    await record.update(req.body);
    res.json(record);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const record = await ImportFailed.findByPk(req.params.id);
    if (!record) return res.status(404).json({ message: "ImportFailed record not found" });

    await record.destroy();
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
