// controllers/jobBatch.controller.js
const JobBatch = require("../models/jobBatch.model");

/**
 * Create a new JobBatch
 */
exports.createJobBatch = async (req, res) => {
  try {
    const jobBatch = await JobBatch.create(req.body);
    res.status(201).json(jobBatch);
  } catch (error) {
    console.error("Error creating JobBatch:", error);
    res.status(500).json({ message: "Failed to create JobBatch", error: error.message });
  }
};

/**
 * Get all JobBatches
 */
exports.getAllJobBatches = async (req, res) => {
  try {
    const jobBatches = await JobBatch.findAll();
    res.json(jobBatches);
  } catch (error) {
    console.error("Error fetching JobBatches:", error);
    res.status(500).json({ message: "Failed to fetch JobBatches", error: error.message });
  }
};

/**
 * Get a single JobBatch by ID
 */
exports.getJobBatchById = async (req, res) => {
  try {
    const { id } = req.params;
    const jobBatch = await JobBatch.findByPk(id);

    if (!jobBatch) {
      return res.status(404).json({ message: "JobBatch not found" });
    }

    res.json(jobBatch);
  } catch (error) {
    console.error("Error fetching JobBatch:", error);
    res.status(500).json({ message: "Failed to fetch JobBatch", error: error.message });
  }
};

/**
 * Update a JobBatch
 */
exports.updateJobBatch = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await JobBatch.update(req.body, { where: { id } });

    if (!updated) {
      return res.status(404).json({ message: "JobBatch not found" });
    }

    const updatedJobBatch = await JobBatch.findByPk(id);
    res.json(updatedJobBatch);
  } catch (error) {
    console.error("Error updating JobBatch:", error);
    res.status(500).json({ message: "Failed to update JobBatch", error: error.message });
  }
};

/**
 * Delete a JobBatch
 */
exports.deleteJobBatch = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await JobBatch.destroy({ where: { id } });

    if (!deleted) {
      return res.status(404).json({ message: "JobBatch not found" });
    }

    res.json({ message: "JobBatch deleted successfully" });
  } catch (error) {
    console.error("Error deleting JobBatch:", error);
    res.status(500).json({ message: "Failed to delete JobBatch", error: error.message });
  }
};
