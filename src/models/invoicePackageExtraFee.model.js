const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const InvoicePackageExtraFee = sequelize.define("InvoicePackageExtraFee", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  activation_group_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  groupname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  value_type: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  value_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  value: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  equation: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  created_by: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  updated_by: {
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
  tableName: "invoice_package_extra_fees",
  timestamps: false,
  indexes: [
    { fields: ["groupname"] },
    { fields: ["name"] },
  ],
});

module.exports = InvoicePackageExtraFee;
