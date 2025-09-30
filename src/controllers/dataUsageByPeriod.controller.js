const DataUsage = require("../models/dataUsageByPeriod.model");

exports.getAll = async (req, res) => {
  try {
    const data = await DataUsage.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getByUsername = async (req, res) => {
  try {
    const { username } = req.params;
    const data = await DataUsage.findAll({ where: { username } });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
