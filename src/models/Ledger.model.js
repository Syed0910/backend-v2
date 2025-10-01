const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Ledger = sequelize.define('Ledger', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  transaction_id: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  isp_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  branch_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  action_profile_type: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  action_by_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  action_by_username: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  to_profile_type: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  to_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  to_username: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  against_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true
  },
  against_username: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  against_profile_type: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  dr_cr_type: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  ledger_type: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  payments_id: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  invoices_id: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  previous_balance: {
    type: DataTypes.DECIMAL(12,2),
    allowNull: true
  },
  amount: {
    type: DataTypes.DECIMAL(12,2),
    allowNull: true
  },
  balance: {
    type: DataTypes.DECIMAL(12,2),
    allowNull: true
  },
  note: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  tableName: 'ledgers',
  timestamps: false
});

module.exports = Ledger;
