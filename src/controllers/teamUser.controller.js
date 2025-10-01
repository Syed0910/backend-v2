// src/controllers/teamUser.controller.js

const TeamUser = require("../models/teamUser.model");

exports.getAll = async (req, res) => {
  try {
    const data = await TeamUser.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const entry = await TeamUser.findByPk(req.params.id);
    if (!entry) return res.status(404).json({ message: "Not found" });
    res.json(entry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const entry = await TeamUser.create(req.body);
    res.status(201).json(entry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await TeamUser.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) return res.status(404).json({ message: "Not found" });
    const updatedEntry = await TeamUser.findByPk(req.params.id);
    res.json(updatedEntry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await TeamUser.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
