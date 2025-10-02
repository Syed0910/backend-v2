const express = require('express');
const router = express.Router();
const radGroupReplyController = require('../controllers/radGroupReply.controller');

router.get('/', radGroupReplyController.index);
router.get('/:id', radGroupReplyController.show);
router.post('/', radGroupReplyController.store);
router.put('/:id', radGroupReplyController.update);
router.delete('/:id', radGroupReplyController.destroy);

module.exports = router;
