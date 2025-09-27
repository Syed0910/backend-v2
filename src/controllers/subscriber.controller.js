const Subscriber = require("../models/subscriber.model");

// ✅ Get all subscribers
exports.getAll = async (req, res) => {
  try {
    const subs = await Subscriber.findAll({ include: "package" }); // include package info
    res.json(subs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Get subscriber by ID
exports.getById = async (req, res) => {
  try {
    const sub = await Subscriber.findByPk(req.params.id, { include: "package" });
    if (!sub) return res.status(404).json({ message: "Subscriber not found" });
    res.json(sub);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
