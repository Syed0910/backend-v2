// src/controllers/subscriberMacaddresses.controller.js

const SubscriberMacaddresses = require("../models/subscriberMacaddresses.model");

// Get all records
exports.getAll = async (req, res) => {
  try {
    const data = await SubscriberMacaddresses.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get one by ID
exports.getById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await SubscriberMacaddresses.findByPk(id);
    if (!data) return res.status(404).json({ message: "Not found" });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create new
exports.create = async (req, res) => {
  try {
    const newRecord = await SubscriberMacaddresses.create(req.body);
    res.status(201).json(newRecord);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update by ID
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const [updated] = await SubscriberMacaddresses.update(req.body, {
      where: { id }
    });
    if (!updated) return res.status(404).json({ message: "Not found" });
    const updatedData = await SubscriberMacaddresses.findByPk(id);
    res.json(updatedData);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete by ID
exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await SubscriberMacaddresses.destroy({ where: { id } });
    if (!deleted) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
