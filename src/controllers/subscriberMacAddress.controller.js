const SubscriberMacAddress = require("../models/subscriberMacAddress.model");

exports.getAllSubscriberMacAddresses = async (req, res) => {
  try {
    const macAddresses = await SubscriberMacAddress.findAll();
    res.json(macAddresses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSubscriberMacAddressById = async (req, res) => {
  try {
    const macAddress = await SubscriberMacAddress.findByPk(req.params.id);
    if (!macAddress) return res.status(404).json({ error: "SubscriberMacAddress not found" });
    res.json(macAddress);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createSubscriberMacAddress = async (req, res) => {
  try {
    const newMacAddress = await SubscriberMacAddress.create(req.body);
    res.status(201).json(newMacAddress);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateSubscriberMacAddress = async (req, res) => {
  try {
    const macAddress = await SubscriberMacAddress.findByPk(req.params.id);
    if (!macAddress) return res.status(404).json({ error: "SubscriberMacAddress not found" });
    await macAddress.update(req.body);
    res.json(macAddress);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteSubscriberMacAddress = async (req, res) => {
  try {
    const macAddress = await SubscriberMacAddress.findByPk(req.params.id);
    if (!macAddress) return res.status(404).json({ error: "SubscriberMacAddress not found" });
    await macAddress.destroy();
    res.json({ message: "SubscriberMacAddress deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
