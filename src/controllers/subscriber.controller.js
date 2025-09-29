const Subscriber = require("../models/subscriber.model");

// Create a new subscriber
exports.createSubscriber = async (req, res) => {
  try {
    const subscriber = await Subscriber.create(req.body);
    res.status(201).json(subscriber);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Get all subscribers
exports.getAllSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.findAll();
    res.json(subscribers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Get subscriber by ID
exports.getSubscriberById = async (req, res) => {
  try {
    const subscriber = await Subscriber.findByPk(req.params.id);
    if (!subscriber) return res.status(404).json({ message: "Subscriber not found" });
    res.json(subscriber);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Update subscriber by ID
exports.updateSubscriber = async (req, res) => {
  try {
    const [updated] = await Subscriber.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ message: "Subscriber not found" });
    const updatedSubscriber = await Subscriber.findByPk(req.params.id);
    res.json(updatedSubscriber);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Delete subscriber by ID
exports.deleteSubscriber = async (req, res) => {
  try {
    const deleted = await Subscriber.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ message: "Subscriber not found" });
    res.json({ message: "Subscriber deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
