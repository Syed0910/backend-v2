const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Radcheck = sequelize.define("Radcheck", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING(64),
    allowNull: false,
    defaultValue: "",
  },
  attribute: {
    type: DataTypes.STRING(64),
    allowNull: false,
    defaultValue: "",
  },
  op: {
    type: DataTypes.CHAR(2),
    allowNull: false,
    defaultValue: "==",
  },
  value: {
    type: DataTypes.STRING(253),
    allowNull: false,
    defaultValue: "",
  },
}, {
  tableName: "radcheck",
  timestamps: false,
});

module.exports = Radcheck;
