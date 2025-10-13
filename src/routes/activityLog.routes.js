const express = require("express");
const router = express.Router();
const activityLogController = require("../controllers/activityLog.controller");

// GET /api/activity-log?limit=100
router.get("/", activityLogController.getAllActivityLogs);

// GET /api/activity-log/:id
router.get("/:id", activityLogController.getActivityLogById);

module.exports = router;
