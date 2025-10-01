const SmsTemplate = require("../models/smsTemplates.model");

exports.getAllSmsTemplates = async (req, res) => {
  try {
    const templates = await SmsTemplate.findAll();
    res.json(templates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSmsTemplateById = async (req, res) => {
  try {
    const template = await SmsTemplate.findByPk(req.params.id);
    if (!template) return res.status(404).json({ error: "SmsTemplate not found" });
    res.json(template);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createSmsTemplate = async (req, res) => {
  try {
    const newTemplate = await SmsTemplate.create(req.body);
    res.status(201).json(newTemplate);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateSmsTemplate = async (req, res) => {
  try {
    const template = await SmsTemplate.findByPk(req.params.id);
    if (!template) return res.status(404).json({ error: "SmsTemplate not found" });
    await template.update(req.body);
    res.json(template);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteSmsTemplate = async (req, res) => {
  try {
    const template = await SmsTemplate.findByPk(req.params.id);
    if (!template) return res.status(404).json({ error: "SmsTemplate not found" });
    await template.destroy();
    res.json({ message: "SmsTemplate deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
