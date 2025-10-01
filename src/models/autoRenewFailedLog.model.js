const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const AutoRenewFailedLog = sequelize.define("AutoRenewFailedLog", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  subscriber_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  subscriber_username: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  status: {
    type: DataTypes.INTEGER,
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
  tableName: "auto_renew_failed_logs",
  timestamps: false,
});

module.exports = AutoRenewFailedLog;
