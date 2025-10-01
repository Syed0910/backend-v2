const Session = require("../models/session.model");

// Get all sessions
exports.getAllSessions = async (req, res) => {
  try {
    const sessions = await Session.findAll();
    res.status(200).json(sessions);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch sessions", details: error.message });
  }
};

// Get a single session by ID
exports.getSessionById = async (req, res) => {
  try {
    const session = await Session.findByPk(req.params.id);
    if (!session) {
      return res.status(404).json({ error: "Session not found" });
    }
    res.status(200).json(session);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch session", details: error.message });
  }
};

// Delete a session
exports.deleteSession = async (req, res) => {
  try {
    const rowsDeleted = await Session.destroy({ where: { id: req.params.id } });
    if (!rowsDeleted) {
      return res.status(404).json({ error: "Session not found" });
    }
    res.status(200).json({ message: "Session deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete session", details: error.message });
  }
};
