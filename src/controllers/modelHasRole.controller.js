const ModelHasRole = require("../models/modelHasRole.model");

exports.getAll = async (req, res) => {
  try {
    const records = await ModelHasRole.findAll();
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getByCompositeKey = async (req, res) => {
  const { role_id, model_id, model_type } = req.params;

  try {
    const record = await ModelHasRole.findOne({
      where: { role_id, model_id, model_type },
    });

    if (!record) return res.status(404).json({ message: "Record not found" });
    res.json(record);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const record = await ModelHasRole.create(req.body);
    res.status(201).json(record);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  const { role_id, model_id, model_type } = req.params;

  try {
    const record = await ModelHasRole.findOne({
      where: { role_id, model_id, model_type },
    });

    if (!record) return res.status(404).json({ message: "Record not found" });

    await record.destroy();
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
