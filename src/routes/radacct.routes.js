const express = require('express');
const router = express.Router();
const radacctController = require('../controllers/radacct.controller');

router.get('/', radacctController.getAllRadacct);
router.get('/:id', radacctController.getRadacctById);
router.get('/username/:username', radacctController.getLatestRadacctByUsername); // ✅ new route
router.post('/', radacctController.createRadacct);
router.put('/:id', radacctController.updateRadacct);
router.delete('/:id', radacctController.deleteRadacct);

module.exports = router;
