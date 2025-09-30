const express = require('express');
const router = express.Router();
const radpostauthController = require('../controllers/radpostauth.controller');

// Get all
router.get('/', radpostauthController.getAllRadpostauth);

// Get by ID
router.get('/:id', radpostauthController.getRadpostauthById);

// Get by username
router.get('/username/:username', radpostauthController.getRadpostauthByUsername);

module.exports = router;
