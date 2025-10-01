const PersonalAccessToken = require("../models/personalAccessToken.model");

exports.getAll = async (req, res) => {
  try {
    const tokens = await PersonalAccessToken.findAll();
    res.json(tokens);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const token = await PersonalAccessToken.findByPk(req.params.id);
    if (!token) return res.status(404).json({ message: "Token not found" });
    res.json(token);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const token = await PersonalAccessToken.create(req.body);
    res.status(201).json(token);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const token = await PersonalAccessToken.findByPk(req.params.id);
    if (!token) return res.status(404).json({ message: "Token not found" });

    await token.update(req.body);
    res.json(token);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const token = await PersonalAccessToken.findByPk(req.params.id);
    if (!token) return res.status(404).json({ message: "Token not found" });

    await token.destroy();
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
