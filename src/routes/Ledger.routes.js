const express = require('express');
const router = express.Router();
const ledgerController = require('../controllers/Ledger.controller');

// Get all ledgers
router.get('/', ledgerController.getAllLedgers);

// Get ledger by "to_id"
router.get('/to/:id', ledgerController.getLedgersByToId);

// Get ledgers by username
router.get('/by-username', ledgerController.getLedgersByUsername);

module.exports = router;
