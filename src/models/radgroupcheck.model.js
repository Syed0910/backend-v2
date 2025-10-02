// models/RadGroupCheck.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // your existing Sequelize instance

const RadGroupCheck = sequelize.define(
  "RadGroupCheck",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    groupname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    attribute: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    op: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
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
  },
  {
    tableName: "radgroupcheck",
    timestamps: false, // your table has custom timestamps
    underscored: true, // match snake_case column names
  }
);

module.exports = RadGroupCheck;
