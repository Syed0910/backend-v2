// src/controllers/subscriberServices.controller.js

const SubscriberServices = require("../models/subscriberServices.model");

exports.getAll = async (req, res) => {
  try {
    const data = await SubscriberServices.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const data = await SubscriberServices.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: "Not found" });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newRecord = await SubscriberServices.create(req.body);
    res.status(201).json(newRecord);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await SubscriberServices.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) return res.status(404).json({ message: "Not found" });

    const updatedRecord = await SubscriberServices.findByPk(req.params.id);
    res.json(updatedRecord);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await SubscriberServices.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) return res.status(404).json({ message: "Not found" });

    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
