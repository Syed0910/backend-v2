const express = require("express");
const router = express.Router();
const smsTemplatesController = require("../controllers/smsTemplates.controller");

router.get("/", smsTemplatesController.getAllSmsTemplates);
router.get("/:id", smsTemplatesController.getSmsTemplateById);
router.post("/", smsTemplatesController.createSmsTemplate);
router.put("/:id", smsTemplatesController.updateSmsTemplate);
router.delete("/:id", smsTemplatesController.deleteSmsTemplate);

module.exports = router;
