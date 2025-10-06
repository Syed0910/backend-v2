// routes/jobBatch.routes.js
const express = require("express");
const router = express.Router();
const jobBatchController = require("../controllers/jobBatch.controller");

/**
 * JobBatch Routes
 * Base URL: /api/job-batches
 */

// Create
router.post("/", jobBatchController.createJobBatch);

// Read
router.get("/", jobBatchController.getAllJobBatches);
router.get("/:id", jobBatchController.getJobBatchById);

// Update
router.put("/:id", jobBatchController.updateJobBatch);

// Delete
router.delete("/:id", jobBatchController.deleteJobBatch);

module.exports = router;
