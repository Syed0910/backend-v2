const CaptivePortalSetting = require("../models/captivePortalSetting.model");

exports.getAll = async (req, res) => {
  try {
    const data = await CaptivePortalSetting.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const setting = await CaptivePortalSetting.findByPk(req.params.id);
    if (!setting) return res.status(404).json({ message: "Not found" });
    res.json(setting);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newSetting = await CaptivePortalSetting.create(req.body);
    res.status(201).json(newSetting);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const setting = await CaptivePortalSetting.findByPk(req.params.id);
    if (!setting) return res.status(404).json({ message: "Not found" });

    await setting.update(req.body);
    res.json(setting);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const setting = await CaptivePortalSetting.findByPk(req.params.id);
    if (!setting) return res.status(404).json({ message: "Not found" });

    await setting.destroy();
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
