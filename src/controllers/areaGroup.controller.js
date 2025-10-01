const AreaGroup = require("../models/areaGroup.model");

exports.getAll = async (req, res) => {
  try {
    const groups = await AreaGroup.findAll();
    res.json(groups);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const group = await AreaGroup.findByPk(req.params.id);
    if (!group) return res.status(404).json({ message: "Not found" });
    res.json(group);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newGroup = await AreaGroup.create(req.body);
    res.status(201).json(newGroup);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const group = await AreaGroup.findByPk(req.params.id);
    if (!group) return res.status(404).json({ message: "Not found" });

    await group.update(req.body);
    res.json(group);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const group = await AreaGroup.findByPk(req.params.id);
    if (!group) return res.status(404).json({ message: "Not found" });

    await group.destroy();
    res.json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
