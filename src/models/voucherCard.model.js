// src/models/voucherCard.model.js

const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const VoucherCard = sequelize.define("VoucherCard", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  package_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  nas_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  total: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  used: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  new: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  voucher_combination: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  character_limit: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  prefix: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  reseller_id: {
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
  department_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  same_pass_status: {
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
  }
}, {
  tableName: "voucher_cards",
  timestamps: false,
});

module.exports = VoucherCard;
