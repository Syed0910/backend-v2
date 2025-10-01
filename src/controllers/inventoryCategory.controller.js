const InventoryCategory = require("../models/inventoryCategory.model");

exports.getAll = async (req, res) => {
  try {
    const categories = await InventoryCategory.findAll();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const category = await InventoryCategory.findByPk(req.params.id);
    if (!category) return res.status(404).json({ message: "InventoryCategory not found" });
    res.json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const category = await InventoryCategory.create(req.body);
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const category = await InventoryCategory.findByPk(req.params.id);
    if (!category) return res.status(404).json({ message: "InventoryCategory not found" });

    await category.update(req.body);
    res.json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const category = await InventoryCategory.findByPk(req.params.id);
    if (!category) return res.status(404).json({ message: "InventoryCategory not found" });

    await category.destroy();
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
