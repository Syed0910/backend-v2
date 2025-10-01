const Radusergroup = require("../models/radusergroup.model");

// Get all records
exports.getAll = async (req, res) => {
  try {
    const records = await Radusergroup.findAll();
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get by ID
exports.getById = async (req, res) => {
  try {
    const record = await Radusergroup.findByPk(req.params.id);
    if (!record) return res.status(404).json({ message: "Record not found" });
    res.json(record);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all records by username
exports.getByUsername = async (req, res) => {
  try {
    const records = await Radusergroup.findAll({
      where: { username: req.params.username }
    });
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
