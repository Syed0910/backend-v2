const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const InventoryAssignment = sequelize.define("InventoryAssignment", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  item_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  subscriber_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  invoice_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  invoice_unique_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  purchase_price: {
    type: DataTypes.DECIMAL(8, 2),
    allowNull: true,
  },
  item_quantity: {
    type: DataTypes.DOUBLE(8, 2),
    allowNull: true,
  },
  item_unit_type: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  selling_price: {
    type: DataTypes.DECIMAL(8, 2),
    allowNull: true,
  },
  tax_amount_type: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  tax_amount: {
    type: DataTypes.DOUBLE(8, 2),
    allowNull: true,
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  note: {
    type: DataTypes.TEXT,
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
  assigned_by_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  assigned_by_username: {
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
  tableName: "inventory_assignments",
  timestamps: false,
});

module.exports = InventoryAssignment;
