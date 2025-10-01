// src/controllers/vouchers.controller.js

const Vouchers = require("../models/vouchers.model");

exports.getAll = async (req, res) => {
  try {
    const data = await Vouchers.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const data = await Vouchers.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: "Voucher not found" });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const created = await Vouchers.create(req.body);
    res.status(201).json(created);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await Vouchers.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) return res.status(404).json({ message: "Voucher not found" });
    const updatedData = await Vouchers.findByPk(req.params.id);
    res.json(updatedData);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await Vouchers.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ message: "Voucher not found" });
    res.json({ message: "Voucher deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
