const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Payment = sequelize.define("Payment", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  transaction_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isp_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  branch_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  action_profile_type: {
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
  payer_profile_type: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  payer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  payer_username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  payment_date: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  payment_method: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  payment_amount: {
    type: DataTypes.DECIMAL(12, 2),
    allowNull: true,
  },
  payment_note: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  payment_panel: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  payment_status: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  pgw_type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  pgw_trx_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  pgw_trx_status: {
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
  tableName: "payments",
  timestamps: false, // Because created_at and updated_at are handled manually
});

module.exports = Payment;
