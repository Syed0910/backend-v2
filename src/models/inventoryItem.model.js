const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const InventoryItem = sequelize.define("InventoryItem", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  supplier_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  storage_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  unit_type: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  unit_quantity: {
    type: DataTypes.DECIMAL(8, 2),
    allowNull: false,
  },
  purchase_price: {
    type: DataTypes.DECIMAL(8, 2),
    allowNull: false,
  },
  selling_accounting_amount: {
    type: DataTypes.DECIMAL(8, 2),
    allowNull: false,
  },
  selling_accounting_type: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  sku: {
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
  created_by_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  created_by_username: {
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
  tableName: "inventory_items",
  timestamps: false,
});

module.exports = InventoryItem;
