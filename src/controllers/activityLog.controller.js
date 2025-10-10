const ActivityLog = require("../models/ActivityLog.model");

// Fetch latest activity logs with optional limit query param
exports.getAllActivityLogs = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 100;

    const logs = await ActivityLog.findAll({
      order: [["id", "DESC"]],
      limit,
    });

    res.status(200).json({
      success: true,
      data: logs,
    });
  } catch (error) {
    console.error("Error fetching Activity Logs:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch activity logs",
      error: error.message,
    });
  }
};

// Fetch single log by ID
exports.getActivityLogById = async (req, res) => {
  try {
    const { id } = req.params;
    const log = await ActivityLog.findByPk(id);

    if (!log) {
      return res.status(404).json({
        success: false,
        message: "Activity log not found",
      });
    }

    res.status(200).json({
      success: true,
      data: log,
    });
  } catch (error) {
    console.error("Error fetching Activity Log by ID:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch activity log",
      error: error.message,
    });
  }
};
