const Radacct = require("../models/Radacct.model");

// ✅ Get all logs (with optional limit, defaults to 100)
exports.getAllRadacctLogs = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 100;
    const logs = await Radacct.findAll({
      order: [["radacctid", "DESC"]],
      limit,
    });

    res.status(200).json({ success: true, data: logs });
  } catch (error) {
    console.error("Error fetching radacct logs:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch radacct logs",
      error: error.message,
    });
  }
};

// ✅ Get a single log by ID
exports.getRadacctLogById = async (req, res) => {
  try {
    const { id } = req.params;
    const log = await Radacct.findByPk(id);

    if (!log) {
      return res.status(404).json({
        success: false,
        message: `No radacct log found with ID ${id}`,
      });
    }

    res.status(200).json({ success: true, data: log });
  } catch (error) {
    console.error("Error fetching radacct log by ID:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch radacct log",
      error: error.message,
    });
  }
};

// ✅ Create a new log (manually, not typical)
exports.createRadacctLog = async (req, res) => {
  try {
    const newLog = await Radacct.create(req.body);

    res.status(201).json({
      success: true,
      message: "Radacct log created successfully",
      data: newLog,
    });
  } catch (error) {
    console.error("Error creating radacct log:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to create radacct log",
      error: error.message,
    });
  }
};

// ✅ Update a log by ID
exports.updateRadacctLog = async (req, res) => {
  try {
    const { id } = req.params;

    const log = await Radacct.findByPk(id);
    if (!log) {
      return res.status(404).json({
        success: false,
        message: `No radacct log found with ID ${id}`,
      });
    }

    await log.update(req.body);

    res.status(200).json({
      success: true,
      message: "Radacct log updated successfully",
      data: log,
    });
  } catch (error) {
    console.error("Error updating radacct log:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to update radacct log",
      error: error.message,
    });
  }
};

// ✅ Delete a log by ID
exports.deleteRadacctLog = async (req, res) => {
  try {
    const { id } = req.params;

    const log = await Radacct.findByPk(id);
    if (!log) {
      return res.status(404).json({
        success: false,
        message: `No radacct log found with ID ${id}`,
      });
    }

    await log.destroy();

    res.status(200).json({
      success: true,
      message: "Radacct log deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting radacct log:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to delete radacct log",
      error: error.message,
    });
  }
};
