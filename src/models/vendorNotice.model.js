// src/models/vendorNotice.model.js

const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const VendorNotice = sequelize.define("VendorNotice", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "info",
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  start_date: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  end_date: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  priority: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  read_by: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  target_profile_types: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  isp_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true,
  },
  branch_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true,
  },
  product_type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  source_type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  external_id: {
    type: DataTypes.STRING,
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
  tableName: "vendor_notices",
  timestamps: false,
});

module.exports = VendorNotice;
