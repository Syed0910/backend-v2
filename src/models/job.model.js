const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Job = sequelize.define("Job", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  queue: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  payload: {
    type: DataTypes.TEXT('long'),
    allowNull: false,
  },
  attempts: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false,
  },
  reserved_at: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
  },
  available_at: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
}, {
  tableName: "jobs",
  timestamps: false,
  indexes: [
    { fields: ["queue"] }
  ]
});

module.exports = Job;
