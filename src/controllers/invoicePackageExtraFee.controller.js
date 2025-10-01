const InvoicePackageExtraFee = require("../models/invoicePackageExtraFee.model");

exports.getAll = async (req, res) => {
  try {
    const data = await InvoicePackageExtraFee.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const data = await InvoicePackageExtraFee.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: "InvoicePackageExtraFee not found" });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const created = await InvoicePackageExtraFee.create(req.body);
    res.status(201).json(created);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const data = await InvoicePackageExtraFee.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: "InvoicePackageExtraFee not found" });

    await data.update(req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const data = await InvoicePackageExtraFee.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: "InvoicePackageExtraFee not found" });

    await data.destroy();
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
