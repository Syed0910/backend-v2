const Cashflow = require("../models/cashflow.model");

exports.getAll = async (req, res) => {
  try {
    const data = await Cashflow.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const cashflow = await Cashflow.findByPk(req.params.id);
    if (!cashflow) return res.status(404).json({ message: "Not found" });
    res.json(cashflow);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newCashflow = await Cashflow.create(req.body);
    res.status(201).json(newCashflow);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const cashflow = await Cashflow.findByPk(req.params.id);
    if (!cashflow) return res.status(404).json({ message: "Not found" });

    await cashflow.update(req.body);
    res.json(cashflow);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const cashflow = await Cashflow.findByPk(req.params.id);
    if (!cashflow) return res.status(404).json({ message: "Not found" });

    await cashflow.destroy();
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
