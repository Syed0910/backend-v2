const Radcheck = require("../models/radcheck.model");

exports.getAll = async (req, res) => {
  try {
    const records = await Radcheck.findAll();
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const record = await Radcheck.findByPk(req.params.id);
    if (!record) return res.status(404).json({ message: "Record not found" });
    res.json(record);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getByUsername = async (req, res) => {
  try {
    const { username } = req.params;

    const record = await Radcheck.findOne({
      where: {
        username: username,
        attribute: "Cleartext-Password",
      },
    });

    if (!record) {
      return res.status(404).json({ message: "Record not found for this username" });
    }

    res.json(record);
  } catch (err) {
    console.error("Error fetching radcheck by username:", err);
    res.status(500).json({ error: err.message });
  }
};


exports.create = async (req, res) => {
  try {
    const newRecord = await Radcheck.create(req.body);
    res.status(201).json(newRecord);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const record = await Radcheck.findByPk(req.params.id);
    if (!record) return res.status(404).json({ message: "Record not found" });

    await record.update(req.body);
    res.json(record);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.updateByUsername = async (req, res) => {
  try {
    const { username } = req.params;
    const { value } = req.body;

    // Find the record by username and attribute
    const record = await Radcheck.findOne({
      where: {
        username: username,
        attribute: "Cleartext-Password",
      },
    });

    if (!record) {
      return res.status(404).json({ message: "Record not found for this username" });
    }

    // Update the value (password)
    await record.update({ value });

    res.json({ message: "Password updated successfully", record });
  } catch (err) {
    console.error("Error updating radcheck by username:", err);
    res.status(500).json({ error: err.message });
  }
};


exports.remove = async (req, res) => {
  try {
    const record = await Radcheck.findByPk(req.params.id);
    if (!record) return res.status(404).json({ message: "Record not found" });

    await record.destroy();
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
