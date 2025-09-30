const Ledger = require('../models/Ledger.model');
const { Op } = require('sequelize');

// GET all ledgers
exports.getAllLedgers = async (req, res) => {
  try {
    const ledgers = await Ledger.findAll();
    res.json(ledgers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// GET all ledgers by to_id
exports.getLedgersByToId = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: 'ID is required' });

    const ledgers = await Ledger.findAll({
      where: { to_id: id },
      order: [['created_at', 'DESC']] // optional: latest first
    });

    if (!ledgers.length) {
      return res.status(404).json({ error: 'No ledger entries found for this to_id' });
    }

    res.json(ledgers);
  } catch (err) {
    console.error('Error fetching ledgers by to_id:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// GET ledgers by username (action_by_username OR to_username)
exports.getLedgersByUsername = async (req, res) => {
  try {
    const { username } = req.query;
    if (!username) return res.status(400).json({ error: 'Username is required' });

    const ledgers = await Ledger.findAll({
      where: {
        [Op.or]: [
          { action_by_username: username },
          { to_username: username }
        ]
      }
    });

    res.json(ledgers);
  } catch (err) {
    console.error('Error fetching ledgers by username:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
