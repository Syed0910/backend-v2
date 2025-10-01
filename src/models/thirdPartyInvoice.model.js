// src/models/thirdPartyInvoice.model.js

const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ThirdPartyInvoice = sequelize.define("ThirdPartyInvoice", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  unique_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  invoice_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
  },
  attribute_key: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  attribute_value: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  isp_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  branch_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  created_by_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  created_by_username: {
    type: DataTypes.STRING,
    allowNull: false,
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
  tableName: "third_party_invoices",
  timestamps: false,
  indexes: [
    { fields: ["unique_id"] },
    { fields: ["invoice_id"] },
    { fields: ["isp_id"] },
    { fields: ["branch_id"] }
  ]
});

module.exports = ThirdPartyInvoice;
