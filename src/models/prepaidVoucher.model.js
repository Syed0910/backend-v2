const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const PrepaidVoucher = sequelize.define("PrepaidVoucher", {
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
    allowNull: false,
  },
  secrete_voucher: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  usage_status: DataTypes.INTEGER,
  usage_amount: DataTypes.DOUBLE(8, 2),
  usage_by: DataTypes.INTEGER,
  used_for: DataTypes.INTEGER,
  used_at: DataTypes.DATE,
  used_ip: DataTypes.STRING,
  created_by_id: DataTypes.INTEGER,
  created_by_username: DataTypes.STRING,
  isp_id: DataTypes.INTEGER,
  branch_id: DataTypes.INTEGER,
  created_at: DataTypes.DATE,
  updated_at: DataTypes.DATE,
}, {
  tableName: "prepaid_vouchers",
  timestamps: false,
});

module.exports = PrepaidVoucher;
