const Nas = require("../models/nas.model");

// Get all NAS
exports.getAllNas = async (req, res) => {
  try {
    const nasList = await Nas.findAll();
    res.json({ success: true, data: nasList });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get NAS by ID
exports.getNasById = async (req, res) => {
  try {
    const nas = await Nas.findByPk(req.params.id);
    if (!nas) return res.status(404).json({ success: false, message: "NAS not found" });
    res.json({ success: true, data: nas });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Create NAS
exports.createNas = async (req, res) => {
  try {
    const newNas = await Nas.create(req.body);
    res.status(201).json({ success: true, data: newNas });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Update NAS
exports.updateNas = async (req, res) => {
  try {
    const nas = await Nas.findByPk(req.params.id);
    if (!nas) return res.status(404).json({ success: false, message: "NAS not found" });
    await nas.update(req.body);
    res.json({ success: true, data: nas });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Delete NAS
exports.deleteNas = async (req, res) => {
  try {
    const nas = await Nas.findByPk(req.params.id);
    if (!nas) return res.status(404).json({ success: false, message: "NAS not found" });
    await nas.destroy();
    res.json({ success: true, message: "NAS deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
