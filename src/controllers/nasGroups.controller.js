const NasGroup = require("../models/nasGroups.model");

exports.getAll = async (req, res) => {
  try {
    const groups = await NasGroup.findAll();
    res.json(groups);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const group = await NasGroup.findByPk(req.params.id);
    if (!group) return res.status(404).json({ message: "Group not found" });
    res.json(group);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newGroup = await NasGroup.create(req.body);
    res.status(201).json(newGroup);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const group = await NasGroup.findByPk(req.params.id);
    if (!group) return res.status(404).json({ message: "Group not found" });

    await group.update(req.body);
    res.json(group);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const group = await NasGroup.findByPk(req.params.id);
    if (!group) return res.status(404).json({ message: "Group not found" });

    await group.destroy();
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
