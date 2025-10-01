const InvoiceSetting = require("../models/invoiceSetting.model");

exports.getAll = async (req, res) => {
  try {
    const settings = await InvoiceSetting.findAll();
    res.json(settings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const setting = await InvoiceSetting.findByPk(req.params.id);
    if (!setting) return res.status(404).json({ message: "InvoiceSetting not found" });
    res.json(setting);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const setting = await InvoiceSetting.create(req.body);
    res.status(201).json(setting);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const setting = await InvoiceSetting.findByPk(req.params.id);
    if (!setting) return res.status(404).json({ message: "InvoiceSetting not found" });

    await setting.update(req.body);
    res.json(setting);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const setting = await InvoiceSetting.findByPk(req.params.id);
    if (!setting) return res.status(404).json({ message: "InvoiceSetting not found" });

    await setting.destroy();
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
