const express = require("express");
const router = express.Router();
const smsPostSettingsController = require("../controllers/smsPostSettings.controller");

router.get("/", smsPostSettingsController.getAllSmsPostSettings);
router.get("/:id", smsPostSettingsController.getSmsPostSettingById);
router.post("/", smsPostSettingsController.createSmsPostSetting);
router.put("/:id", smsPostSettingsController.updateSmsPostSetting);
router.delete("/:id", smsPostSettingsController.deleteSmsPostSetting);

module.exports = router;
