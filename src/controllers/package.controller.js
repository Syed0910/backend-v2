const Package = require("../models/package.model");

// Get all packages
exports.getAllPackages = async (req, res) => {
  try {
    const packages = await Package.findAll();
    res.json({ success: true, data: packages });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get package by ID
exports.getPackageById = async (req, res) => {
  try {
    const pkg = await Package.findByPk(req.params.id);
    if (!pkg) return res.status(404).json({ success: false, message: "Package not found" });
    res.json({ success: true, data: pkg });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Create package
exports.createPackage = async (req, res) => {
  try {
    const newPackage = await Package.create(req.body);
    res.status(201).json({ success: true, data: newPackage });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Update package
exports.updatePackage = async (req, res) => {
  try {
    const pkg = await Package.findByPk(req.params.id);
    if (!pkg) return res.status(404).json({ success: false, message: "Package not found" });
    await pkg.update(req.body);
    res.json({ success: true, data: pkg });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Delete package
exports.deletePackage = async (req, res) => {
  try {
    const pkg = await Package.findByPk(req.params.id);
    if (!pkg) return res.status(404).json({ success: false, message: "Package not found" });
    await pkg.destroy();
    res.json({ success: true, message: "Package deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
