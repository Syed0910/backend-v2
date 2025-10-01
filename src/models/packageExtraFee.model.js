const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const PackageExtraFee = sequelize.define("PackageExtraFee", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
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
  isp_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  branch_id: {
    type: DataTypes.INTEGER,
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
  tableName: "package_extra_fees",
  timestamps: false,
  indexes: [
    { name: "package_extra_fees_groupname_index", fields: ["groupname"] },
    { name: "package_extra_fees_name_index", fields: ["name"] },
  ],
});

module.exports = PackageExtraFee;
