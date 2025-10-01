const Migration = require("../models/migration.model");

exports.getAll = async (req, res) => {
  try {
    const migrations = await Migration.findAll();
    res.json(migrations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const migration = await Migration.findByPk(req.params.id);
    if (!migration) return res.status(404).json({ message: "Migration not found" });
    res.json(migration);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const migration = await Migration.create(req.body);
    res.status(201).json(migration);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const migration = await Migration.findByPk(req.params.id);
    if (!migration) return res.status(404).json({ message: "Migration not found" });

    await migration.update(req.body);
    res.json(migration);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const migration = await Migration.findByPk(req.params.id);
    if (!migration) return res.status(404).json({ message: "Migration not found" });

    await migration.destroy();
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
