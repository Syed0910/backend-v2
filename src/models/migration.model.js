const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Migration = sequelize.define("Migration", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  migration: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  batch: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: "migrations",
  timestamps: false,
});

module.exports = Migration;
