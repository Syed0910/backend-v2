const RadpostauthArchive = require("../models/radpostauthArchive.model");

exports.getAll = async (req, res) => {
  try {
    const records = await RadpostauthArchive.findAll();
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const record = await RadpostauthArchive.findByPk(req.params.id);
    if (!record) return res.status(404).json({ message: "Record not found" });
    res.json(record);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Optional: Get by username
exports.getByUsername = async (req, res) => {
  try {
    const records = await RadpostauthArchive.findAll({
      where: { username: req.params.username },
      order: [['authdate', 'DESC']]
    });
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
