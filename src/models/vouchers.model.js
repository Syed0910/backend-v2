// src/models/vouchers.model.js

const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Vouchers = sequelize.define("Vouchers", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  serial: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  card_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  used_by: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  used_time: {
    type: DataTypes.DATE,
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
  isp_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  branch_id: {
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
  tableName: "vouchers",
  timestamps: false,
});

module.exports = Vouchers;
