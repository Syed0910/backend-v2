const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ResellerDistribution = sequelize.define("ResellerDistribution", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  activation_group_id: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  package_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  subscriber_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  reseller_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  reseller_price: {
    type: DataTypes.DOUBLE(8, 2),
    allowNull: true,
  },
  reseller_profit_type: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  reseller_profit: {
    type: DataTypes.DOUBLE(8, 2),
    allowNull: true,
  },
  reseller_total: {
    type: DataTypes.DOUBLE(8, 2),
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
  tableName: "reseller_distributions",
  timestamps: false,
});

module.exports = ResellerDistribution;
