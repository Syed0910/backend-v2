const Radacct = require('../models/radacct.model');

// GET all radacct records
exports.getAllRadacct = async (req, res) => {
  try {
    const records = await Radacct.findAll();
    res.json(records);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// GET radacct record by ID
exports.getRadacctById = async (req, res) => {
  try {
    const record = await Radacct.findByPk(req.params.id);
    if (!record) return res.status(404).json({ error: 'Record not found' });
    res.json(record);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// ✅ GET latest radacct record by username
exports.getLatestRadacctByUsername = async (req, res) => {
  try {
    const { username } = req.params;
    const record = await Radacct.findOne({
      where: { username },
      order: [["acctstarttime", "DESC"]] // or ["radacctid", "DESC"]
    });

    if (!record) return res.status(404).json({ error: 'No session found for this user' });
    res.json(record);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// CREATE new radacct record
exports.createRadacct = async (req, res) => {
  try {
    const newRecord = await Radacct.create(req.body);
    res.status(201).json(newRecord);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// UPDATE radacct record by ID
exports.updateRadacct = async (req, res) => {
  try {
    const record = await Radacct.findByPk(req.params.id);
    if (!record) return res.status(404).json({ error: 'Record not found' });

    await record.update(req.body);
    res.json(record);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// DELETE radacct record by ID
exports.deleteRadacct = async (req, res) => {
  try {
    const record = await Radacct.findByPk(req.params.id);
    if (!record) return res.status(404).json({ error: 'Record not found' });

    await record.destroy();
    res.json({ message: 'Record deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
