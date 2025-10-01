const IPPool = require("../models/ipPool.model");

exports.getAll = async (req, res) => {
  try {
    const data = await IPPool.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const data = await IPPool.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: "IP Pool not found" });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const created = await IPPool.create(req.body);
    res.status(201).json(created);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const data = await IPPool.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: "IP Pool not found" });

    await data.update(req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const data = await IPPool.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: "IP Pool not found" });

    await data.destroy();
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
