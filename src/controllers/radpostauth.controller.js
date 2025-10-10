const Radpostauth = require("../models/Radpostauth.model");
const { Op } = require("sequelize");

// ✅ GET latest 100 records (always limited)
exports.getAllRadpostauth = async (req, res) => {
  try {
    const records = await Radpostauth.findAll({
      order: [["authdate", "DESC"]], // latest first
      limit: 100, // 🚀 Always limit to 100
    });

    res.json(records);
  } catch (err) {
    console.error("Error fetching radpostauth:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// ✅ GET records by ID
exports.getRadpostauthById = async (req, res) => {
  try {
    const { id } = req.params;

    const record = await Radpostauth.findByPk(id);

    if (!record) {
      return res.status(404).json({ error: "No record found for this ID" });
    }

    res.json(record);
  } catch (err) {
    console.error("Error fetching radpostauth by ID:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// ✅ GET latest 100 records by username
exports.getRadpostauthByUsername = async (req, res) => {
  try {
    const { username } = req.params;
    if (!username) {
      return res.status(400).json({ error: "Username is required" });
    }

    const records = await Radpostauth.findAll({
      where: { username },
      order: [["authdate", "DESC"]],
      limit: 100, // 🚀 Also limit per user
    });

    if (!records.length) {
      return res
        .status(404)
        .json({ error: "No records found for this username" });
    }

    res.json(records);
  } catch (err) {
    console.error("Error fetching radpostauth by username:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
