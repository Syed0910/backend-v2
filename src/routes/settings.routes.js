const express = require("express");
const router = express.Router();
const settingsController = require("../controllers/settings.controller");

/* -------------------- SMS POST SETTINGS ROUTES -------------------- */

// ✅ Get all settings
router.get("/", settingsController.getAllSmsPostSettings);

// ✅ Get single setting by ID
router.get("/:id", settingsController.getSmsPostSettingById);

// ✅ Create a new setting
router.post("/", settingsController.createSmsPostSetting);

// ✅ Update an existing setting
router.put("/:id", settingsController.updateSmsPostSetting);

// ✅ Delete a setting
router.delete("/:id", settingsController.deleteSmsPostSetting);

module.exports = router;
