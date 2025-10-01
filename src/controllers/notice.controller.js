const Notice = require("../models/notice.model");

exports.getAll = async (req, res) => {
  try {
    const notices = await Notice.findAll();
    res.json(notices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const notice = await Notice.findByPk(req.params.id);
    if (!notice) return res.status(404).json({ message: "Notice not found" });
    res.json(notice);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const notice = await Notice.create(req.body);
    res.status(201).json(notice);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const notice = await Notice.findByPk(req.params.id);
    if (!notice) return res.status(404).json({ message: "Notice not found" });

    await notice.update(req.body);
    res.json(notice);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const notice = await Notice.findByPk(req.params.id);
    if (!notice) return res.status(404).json({ message: "Notice not found" });

    await notice.destroy();
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
