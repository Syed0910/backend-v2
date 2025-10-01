const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const PackageAccounting = sequelize.define("PackageAccounting", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  groupname: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  package_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  action_by_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  action_by_username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  reseller_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  reseller_username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isp_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  branch_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  profit_status: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  price: {
    type: DataTypes.DOUBLE(8, 2),
    allowNull: false,
  },
  profit_type: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  profit: {
    type: DataTypes.DOUBLE(8, 2),
    allowNull: true,
  },
  resellers_profit_status: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  reseller_profit_type: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  reseller_profit: {
    type: DataTypes.DOUBLE(8, 2),
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
  tableName: "package_accounting",
  timestamps: false,
  indexes: [
    { name: "package_accounting_groupname_index", fields: ["groupname"] },
    { name: "package_accounting_package_id_index", fields: ["package_id"] },
    { name: "package_accounting_action_by_id_index", fields: ["action_by_id"] },
    { name: "package_accounting_reseller_id_index", fields: ["reseller_id"] }
  ]
});

module.exports = PackageAccounting;
