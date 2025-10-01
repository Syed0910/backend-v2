const Otp = require("../models/otp.model");

exports.getAll = async (req, res) => {
  try {
    const otps = await Otp.findAll();
    res.json(otps);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const otp = await Otp.findByPk(req.params.id);
    if (!otp) return res.status(404).json({ message: "OTP not found" });
    res.json(otp);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const otp = await Otp.create(req.body);
    res.status(201).json(otp);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const otp = await Otp.findByPk(req.params.id);
    if (!otp) return res.status(404).json({ message: "OTP not found" });

    await otp.update(req.body);
    res.json(otp);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const otp = await Otp.findByPk(req.params.id);
    if (!otp) return res.status(404).json({ message: "OTP not found" });

    await otp.destroy();
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
