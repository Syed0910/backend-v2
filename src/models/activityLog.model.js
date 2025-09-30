const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ActivityLog = sequelize.define("ActivityLog", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  log_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  subject_type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  event: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  subject_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true,
  },
  subject_username: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  causer_type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  causer_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true,
  },
  causer_username: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  properties: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  ip_address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  batch_uuid: {
    type: DataTypes.CHAR(36),
    allowNull: true,
  },
  isp_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  branch_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true,
  }
}, {
  tableName: "activity_log",
  timestamps: false,
});

module.exports = ActivityLog;
