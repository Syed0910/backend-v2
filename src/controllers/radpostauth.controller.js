const Radpostauth = require('../models/Radpostauth.model');
const { Op } = require('sequelize');

// GET all records
exports.getAllRadpostauth = async (req, res) => {
  try {
    const records = await Radpostauth.findAll({
      order: [['authdate', 'DESC']] // latest first (optional)
    });
    res.json(records);
  } catch (err) {
    console.error('Error fetching radpostauth:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// GET all records by ID
exports.getRadpostauthById = async (req, res) => {
  try {
    const { id } = req.params;

    const records = await Radpostauth.findAll({
      where: { id }
    });

    if (!records.length) {
      return res.status(404).json({ error: 'No records found for this ID' });
    }

    res.json(records);
  } catch (err) {
    console.error('Error fetching radpostauth by ID:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// GET all records by username
exports.getRadpostauthByUsername = async (req, res) => {
  try {
    const { username } = req.params;
    if (!username) {
      return res.status(400).json({ error: 'Username is required' });
    }

    const records = await Radpostauth.findAll({
      where: { username },
      order: [['authdate', 'DESC']]
    });

    if (!records.length) {
      return res.status(404).json({ error: 'No records found for this username' });
    }

    res.json(records);
  } catch (err) {
    console.error('Error fetching radpostauth by username:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
