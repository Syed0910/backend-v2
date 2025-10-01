// src/controllers/vendorNotice.controller.js

const VendorNotice = require("../models/vendorNotice.model");

exports.getAll = async (req, res) => {
  try {
    const notices = await VendorNotice.findAll();
    res.json(notices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const notice = await VendorNotice.findByPk(req.params.id);
    if (!notice) return res.status(404).json({ message: "Notice not found" });
    res.json(notice);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const notice = await VendorNotice.create(req.body);
    res.status(201).json(notice);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await VendorNotice.update(req.body, {
      where: { id: req.params.id }
    });

    if (!updated) return res.status(404).json({ message: "Notice not found" });

    const updatedNotice = await VendorNotice.findByPk(req.params.id);
    res.json(updatedNotice);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await VendorNotice.destroy({
      where: { id: req.params.id }
    });

    if (!deleted) return res.status(404).json({ message: "Notice not found" });

    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
