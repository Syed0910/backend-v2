// models/jobBatch.model.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

/**
 * JobBatch Model
 * Represents a batch of jobs with tracking for pending, failed, and completed jobs.
 */
const JobBatch = sequelize.define("JobBatch", {
  id: {
    type: DataTypes.STRING(255),
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  total_jobs: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pending_jobs: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  failed_jobs: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  failed_job_ids: {
    type: DataTypes.TEXT("long"),
    allowNull: false,
  },
  options: {
    type: DataTypes.TEXT("medium"),
    allowNull: true,
  },
  cancelled_at: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  created_at: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  finished_at: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName: "job_batches",
  timestamps: false, // Already handled with created_at/finished_at integers
});

module.exports = JobBatch;
