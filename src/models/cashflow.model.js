const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Cashflow = sequelize.define("Cashflow", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  type: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  amount: {
    type: DataTypes.DECIMAL(12, 2),
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  payment_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  invoice_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  ledger_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  account_id: {
    type: DataTypes.INTEGER,
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
  source_type: {
    type: DataTypes.INTEGER,
    allowNull: true,
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
  }
}, {
  tableName: "cashflows",
  timestamps: false,
});

module.exports = Cashflow;
