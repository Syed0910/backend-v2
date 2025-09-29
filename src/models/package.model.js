const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Package = sequelize.define("package", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data_qt_vol: { // FUP
    type: DataTypes.INTEGER,
  },
  data_fup_vol: { // optional FUP
    type: DataTypes.INTEGER,
  },
  created_at: {
    type: DataTypes.DATE,
  },
  updated_at: {
    type: DataTypes.DATE,
  },
}, {
  tableName: "packages",
  timestamps: false,
});

module.exports = Package;
