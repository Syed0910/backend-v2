const InventoryAssignment = require("../models/inventoryAssignment.model");

exports.getAll = async (req, res) => {
  try {
    const assignments = await InventoryAssignment.findAll();
    res.json(assignments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const assignment = await InventoryAssignment.findByPk(req.params.id);
    if (!assignment) return res.status(404).json({ message: "InventoryAssignment not found" });
    res.json(assignment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const assignment = await InventoryAssignment.create(req.body);
    res.status(201).json(assignment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const assignment = await InventoryAssignment.findByPk(req.params.id);
    if (!assignment) return res.status(404).json({ message: "InventoryAssignment not found" });

    await assignment.update(req.body);
    res.json(assignment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const assignment = await InventoryAssignment.findByPk(req.params.id);
    if (!assignment) return res.status(404).json({ message: "InventoryAssignment not found" });

    await assignment.destroy();
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
