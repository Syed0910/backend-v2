// src/controllers/thirdPartyInvoice.controller.js

const ThirdPartyInvoice = require("../models/thirdPartyInvoice.model");

exports.getAll = async (req, res) => {
  try {
    const data = await ThirdPartyInvoice.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const data = await ThirdPartyInvoice.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: "Not found" });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const data = await ThirdPartyInvoice.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await ThirdPartyInvoice.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) return res.status(404).json({ message: "Not found" });
    const updatedData = await ThirdPartyInvoice.findByPk(req.params.id);
    res.json(updatedData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await ThirdPartyInvoice.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
