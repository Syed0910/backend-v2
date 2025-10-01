const PgwTransaction = require("../models/pgwTransaction.model");

exports.getAll = async (req, res) => {
  try {
    const data = await PgwTransaction.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const data = await PgwTransaction.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: "Transaction not found" });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const data = await PgwTransaction.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const data = await PgwTransaction.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: "Transaction not found" });

    await data.update(req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const data = await PgwTransaction.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: "Transaction not found" });

    await data.destroy();
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
