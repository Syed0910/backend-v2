const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const SmsPostSetting = sequelize.define("SmsPostSetting", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  attribute_type: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  attribute_name: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  attribute_value: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  gateway_name: {
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
  tableName: "sms_post_settings",
  timestamps: false,
});

module.exports = SmsPostSetting;
