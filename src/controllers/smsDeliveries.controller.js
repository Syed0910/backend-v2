const SmsDelivery = require("../models/smsDeliveries.model");

exports.getAllSmsDeliveries = async (req, res) => {
  try {
    const deliveries = await SmsDelivery.findAll();
    res.json(deliveries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSmsDeliveryById = async (req, res) => {
  try {
    const delivery = await SmsDelivery.findByPk(req.params.id);
    if (!delivery) return res.status(404).json({ error: "SmsDelivery not found" });
    res.json(delivery);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createSmsDelivery = async (req, res) => {
  try {
    const newDelivery = await SmsDelivery.create(req.body);
    res.status(201).json(newDelivery);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateSmsDelivery = async (req, res) => {
  try {
    const delivery = await SmsDelivery.findByPk(req.params.id);
    if (!delivery) return res.status(404).json({ error: "SmsDelivery not found" });
    await delivery.update(req.body);
    res.json(delivery);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteSmsDelivery = async (req, res) => {
  try {
    const delivery = await SmsDelivery.findByPk(req.params.id);
    if (!delivery) return res.status(404).json({ error: "SmsDelivery not found" });
    await delivery.destroy();
    res.json({ message: "SmsDelivery deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
