const Setting = require("../models/settings.model");

/* -------------------- GET ALL SETTINGS -------------------- */
// Supports filtering by group, e.g. GET /api/settings?group=general
exports.getAllSettings = async (req, res) => {
  try {
    const where = {};
    if (req.query.group) {
      where.group = req.query.group;
    }

    const settings = await Setting.findAll({ where });

    // If no data found, return an empty array
    if (!settings || settings.length === 0) {
      return res.json([]);
    }

    // Parse payload safely if stored as JSON string
    const parsed = settings.map((s) => {
      let payload = s.payload;
      try {
        if (typeof payload === "string") payload = JSON.parse(payload);
      } catch {
        /* ignore parse error */
      }
      return { ...s.toJSON(), payload };
    });

    res.json(parsed);
  } catch (error) {
    console.error("❌ Error fetching settings:", error);
    res.status(500).json({ error: error.message });
  }
};

/* -------------------- GET SETTING BY ID -------------------- */
exports.getSettingById = async (req, res) => {
  try {
    const setting = await Setting.findByPk(req.params.id);
    if (!setting) return res.status(404).json({ error: "Setting not found" });

    let payload = setting.payload;
    try {
      if (typeof payload === "string") payload = JSON.parse(payload);
    } catch {
      /* ignore */
    }

    res.json({ ...setting.toJSON(), payload });
  } catch (error) {
    console.error("❌ Error fetching setting by ID:", error);
    res.status(500).json({ error: error.message });
  }
};

/* -------------------- CREATE NEW SETTING -------------------- */
exports.createSetting = async (req, res) => {
  try {
    const data = { ...req.body };

    // Auto-stringify payload if it’s an object
    if (data.payload && typeof data.payload === "object") {
      data.payload = JSON.stringify(data.payload);
    }

    const newSetting = await Setting.create(data);
    res.status(201).json(newSetting);
  } catch (error) {
    console.error("❌ Error creating setting:", error);
    res.status(400).json({ error: error.message });
  }
};

/* -------------------- UPDATE EXISTING SETTING -------------------- */
exports.updateSetting = async (req, res) => {
  try {
    const setting = await Setting.findByPk(req.params.id);
    if (!setting) return res.status(404).json({ error: "Setting not found" });

    const data = { ...req.body };
    if (data.payload && typeof data.payload === "object") {
      data.payload = JSON.stringify(data.payload);
    }

    await setting.update(data);

    let updated = setting.toJSON();
    try {
      if (typeof updated.payload === "string") {
        updated.payload = JSON.parse(updated.payload);
      }
    } catch {
      /* ignore */
    }

    res.json(updated);
  } catch (error) {
    console.error("❌ Error updating setting:", error);
    res.status(400).json({ error: error.message });
  }
};

/* -------------------- DELETE SETTING -------------------- */
exports.deleteSetting = async (req, res) => {
  try {
    const setting = await Setting.findByPk(req.params.id);
    if (!setting) return res.status(404).json({ error: "Setting not found" });

    await setting.destroy();
    res.json({ message: "Setting deleted successfully" });
  } catch (error) {
    console.error("❌ Error deleting setting:", error);
    res.status(500).json({ error: error.message });
  }
};
