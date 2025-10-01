const Setting = require("../models/settings.model");

exports.getAllSettings = async (req, res) => {
  try {
    const settings = await Setting.findAll();
    res.json(settings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSettingById = async (req, res) => {
  try {
    const setting = await Setting.findByPk(req.params.id);
    if (!setting) return res.status(404).json({ error: "Setting not found" });
    res.json(setting);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createSetting = async (req, res) => {
  try {
    const newSetting = await Setting.create(req.body);
    res.status(201).json(newSetting);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateSetting = async (req, res) => {
  try {
    const setting = await Setting.findByPk(req.params.id);
    if (!setting) return res.status(404).json({ error: "Setting not found" });
    await setting.update(req.body);
    res.json(setting);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteSetting = async (req, res) => {
  try {
    const setting = await Setting.findByPk(req.params.id);
    if (!setting) return res.status(404).json({ error: "Setting not found" });
    await setting.destroy();
    res.json({ message: "Setting deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
