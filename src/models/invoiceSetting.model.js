const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const InvoiceSetting = sequelize.define("InvoiceSetting", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  group_id: {
    type: DataTypes.STRING,
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
    type: DataTypes.STRING,
    allowNull: true,
  },
  bind_type: {
    type: DataTypes.INTEGER,
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
  tableName: "invoice_settings",
  timestamps: false,
  indexes: [
    { fields: ["group_id"] },
    { fields: ["profile_type"] }
  ]
});

module.exports = InvoiceSetting;
