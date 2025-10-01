const SmsPostSetting = require("../models/smsPostSettings.model");

exports.getAllSmsPostSettings = async (req, res) => {
  try {
    const settings = await SmsPostSetting.findAll();
    res.json(settings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSmsPostSettingById = async (req, res) => {
  try {
    const setting = await SmsPostSetting.findByPk(req.params.id);
    if (!setting) return res.status(404).json({ error: "SmsPostSetting not found" });
    res.json(setting);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createSmsPostSetting = async (req, res) => {
  try {
    const newSetting = await SmsPostSetting.create(req.body);
    res.status(201).json(newSetting);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateSmsPostSetting = async (req, res) => {
  try {
    const setting = await SmsPostSetting.findByPk(req.params.id);
    if (!setting) return res.status(404).json({ error: "SmsPostSetting not found" });
    await setting.update(req.body);
    res.json(setting);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteSmsPostSetting = async (req, res) => {
  try {
    const setting = await SmsPostSetting.findByPk(req.params.id);
    if (!setting) return res.status(404).json({ error: "SmsPostSetting not found" });
    await setting.destroy();
    res.json({ message: "SmsPostSetting deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
