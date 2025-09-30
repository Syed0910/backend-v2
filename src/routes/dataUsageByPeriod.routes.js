const express = require("express");
const router = express.Router();
const controller = require("../controllers/dataUsageByPeriod.controller");

router.get("/", controller.getAll); // List all usage
router.get("/:username", controller.getByUsername); // Filter by username

module.exports = router;
