// controllers/emailDelivery.controller.js
const EmailDelivery = require("../models/emailDelivery.model");

exports.getAll = async (req, res) => {
  try {
    const deliveries = await EmailDelivery.findAll();
    res.json(deliveries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const delivery = await EmailDelivery.findByPk(req.params.id);
    if (!delivery) return res.status(404).json({ message: "EmailDelivery not found" });
    res.json(delivery);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const delivery = await EmailDelivery.create(req.body);
    res.status(201).json(delivery);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const delivery = await EmailDelivery.findByPk(req.params.id);
    if (!delivery) return res.status(404).json({ message: "EmailDelivery not found" });

    await delivery.update(req.body);
    res.json(delivery);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const delivery = await EmailDelivery.findByPk(req.params.id);
    if (!delivery) return res.status(404).json({ message: "EmailDelivery not found" });

    await delivery.destroy();
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
