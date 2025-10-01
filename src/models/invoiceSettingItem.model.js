const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const InvoiceSettingItem = sequelize.define("InvoiceSettingItem", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  item: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  value: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  type: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  group_id: {
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
  tableName: "invoice_setting_items",
  timestamps: false,
  indexes: [
    { fields: ["item"] }
  ]
});

module.exports = InvoiceSettingItem;
