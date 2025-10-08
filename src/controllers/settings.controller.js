const SmsPostSettings = require("../models/smsPostSettings.model");

/* -------------------- GET ALL -------------------- */
exports.getAllSmsPostSettings = async (req, res) => {
  try {
    const settings = await SmsPostSettings.find();
    res.status(200).json(settings);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch settings", error });
  }
};

/* -------------------- GET BY ID -------------------- */
exports.getSmsPostSettingById = async (req, res) => {
  try {
    const setting = await SmsPostSettings.findById(req.params.id);
    if (!setting)
      return res.status(404).json({ message: "Setting not found" });
    res.status(200).json(setting);
  } catch (error) {
    res.status(500).json({ message: "Error fetching setting", error });
  }
};

/* -------------------- CREATE -------------------- */
exports.createSmsPostSetting = async (req, res) => {
  try {
    const newSetting = new SmsPostSettings(req.body);
    await newSetting.save();
    res.status(201).json(newSetting);
  } catch (error) {
    res.status(400).json({ message: "Failed to create setting", error });
  }
};

/* -------------------- UPDATE -------------------- */
exports.updateSmsPostSetting = async (req, res) => {
  try {
    const updatedSetting = await SmsPostSettings.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedSetting)
      return res.status(404).json({ message: "Setting not found" });
    res.status(200).json(updatedSetting);
  } catch (error) {
    res.status(400).json({ message: "Failed to update setting", error });
  }
};

/* -------------------- DELETE -------------------- */
exports.deleteSmsPostSetting = async (req, res) => {
  try {
    const deleted = await SmsPostSettings.findByIdAndDelete(req.params.id);
    if (!deleted)
      return res.status(404).json({ message: "Setting not found" });
    res.status(200).json({ message: "Setting deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete setting", error });
  }
};
