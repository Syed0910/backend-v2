// models/emailDelivery.model.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const EmailDelivery = sequelize.define("EmailDelivery", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email_text: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  api_response: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  created_by_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  created_by_username: {
    type: DataTypes.STRING,
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
  tableName: "email_deliveries",
  timestamps: false,
});

module.exports = EmailDelivery;
