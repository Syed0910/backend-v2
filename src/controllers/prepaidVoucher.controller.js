const PrepaidVoucher = require("../models/prepaidVoucher.model");

exports.getAll = async (req, res) => {
  try {
    const vouchers = await PrepaidVoucher.findAll();
    res.json(vouchers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const voucher = await PrepaidVoucher.findByPk(req.params.id);
    if (!voucher) return res.status(404).json({ message: "Prepaid voucher not found" });
    res.json(voucher);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const voucher = await PrepaidVoucher.create(req.body);
    res.status(201).json(voucher);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const voucher = await PrepaidVoucher.findByPk(req.params.id);
    if (!voucher) return res.status(404).json({ message: "Prepaid voucher not found" });

    await voucher.update(req.body);
    res.json(voucher);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const voucher = await PrepaidVoucher.findByPk(req.params.id);
    if (!voucher) return res.status(404).json({ message: "Prepaid voucher not found" });

    await voucher.destroy();
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
