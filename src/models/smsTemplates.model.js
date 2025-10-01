const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const SmsTemplate = sequelize.define("SmsTemplate", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  sms_type: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  template: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  created_by_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  created_by_username: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  updated_by_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  updated_by_username: {
    type: DataTypes.STRING(255),
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
  tableName: "sms_templates",
  timestamps: false,
});

module.exports = SmsTemplate;
