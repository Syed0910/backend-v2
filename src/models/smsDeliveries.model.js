const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const SmsDelivery = sequelize.define("SmsDelivery", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  type: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  mobile: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  sms_text: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  api_response: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  profile_type: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  profile_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  profile_username: {
    type: DataTypes.STRING(255),
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
  },
}, {
  tableName: "sms_deliveries",
  timestamps: false,
});

module.exports = SmsDelivery;
