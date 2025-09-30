const InvoiceSettingItem = require("../models/invoiceSettingItem.model");

exports.getAll = async (req, res) => {
  try {
    const items = await InvoiceSettingItem.findAll();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const item = await InvoiceSettingItem.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: "InvoiceSettingItem not found" });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const item = await InvoiceSettingItem.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const item = await InvoiceSettingItem.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: "InvoiceSettingItem not found" });

    await item.update(req.body);
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const item = await InvoiceSettingItem.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: "InvoiceSettingItem not found" });

    await item.destroy();
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
