const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const DataUsageByPeriod = sequelize.define("DataUsageByPeriod", {
  username: {
    type: DataTypes.STRING(64),
    allowNull: false,
    primaryKey: true,
  },
  period_start: {
    type: DataTypes.DATE,
    allowNull: false,
    primaryKey: true,
  },
  period_end: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  acctinputoctets: {
    type: DataTypes.BIGINT,
    allowNull: true,
  },
  acctoutputoctets: {
    type: DataTypes.BIGINT,
    allowNull: true,
  },
}, {
  tableName: "data_usage_by_period",
  timestamps: false,
});

module.exports = DataUsageByPeriod;
