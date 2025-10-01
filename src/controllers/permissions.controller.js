const Permission = require("../models/permissions.model");

exports.getAll = async (req, res) => {
  try {
    const permissions = await Permission.findAll();
    res.json(permissions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const permission = await Permission.findByPk(req.params.id);
    if (!permission) return res.status(404).json({ message: "Permission not found" });
    res.json(permission);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const permission = await Permission.create(req.body);
    res.status(201).json(permission);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const permission = await Permission.findByPk(req.params.id);
    if (!permission) return res.status(404).json({ message: "Permission not found" });

    await permission.update(req.body);
    res.json(permission);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const permission = await Permission.findByPk(req.params.id);
    if (!permission) return res.status(404).json({ message: "Permission not found" });

    await permission.destroy();
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
