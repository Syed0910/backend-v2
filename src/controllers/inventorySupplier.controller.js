const InventorySupplier = require("../models/inventorySupplier.model");

exports.getAll = async (req, res) => {
  try {
    const suppliers = await InventorySupplier.findAll();
    res.json(suppliers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const supplier = await InventorySupplier.findByPk(req.params.id);
    if (!supplier) return res.status(404).json({ message: "InventorySupplier not found" });
    res.json(supplier);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const supplier = await InventorySupplier.create(req.body);
    res.status(201).json(supplier);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const supplier = await InventorySupplier.findByPk(req.params.id);
    if (!supplier) return res.status(404).json({ message: "InventorySupplier not found" });

    await supplier.update(req.body);
    res.json(supplier);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const supplier = await InventorySupplier.findByPk(req.params.id);
    if (!supplier) return res.status(404).json({ message: "InventorySupplier not found" });

    await supplier.destroy();
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
