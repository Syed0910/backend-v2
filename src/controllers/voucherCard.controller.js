// src/controllers/voucherCard.controller.js

const VoucherCard = require("../models/voucherCard.model");

exports.getAll = async (req, res) => {
  try {
    const cards = await VoucherCard.findAll();
    res.json(cards);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const card = await VoucherCard.findByPk(req.params.id);
    if (!card) return res.status(404).json({ message: "Voucher card not found" });
    res.json(card);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const card = await VoucherCard.create(req.body);
    res.status(201).json(card);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await VoucherCard.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) return res.status(404).json({ message: "Voucher card not found" });
    const updatedCard = await VoucherCard.findByPk(req.params.id);
    res.json(updatedCard);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await VoucherCard.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ message: "Voucher card not found" });
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
