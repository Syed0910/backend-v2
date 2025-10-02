const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Radreply = sequelize.define("Radreply", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING(64),
    allowNull: false,
    defaultValue: '',
  },
  attribute: {
    type: DataTypes.STRING(64),
    allowNull: false,
    defaultValue: '',
  },
  op: {
    type: DataTypes.CHAR(2),
    allowNull: false,
    defaultValue: '=',
  },
  value: {
    type: DataTypes.STRING(253),
    allowNull: false,
    defaultValue: '',
  },
}, {
  tableName: "radreply",
  timestamps: false,
});

module.exports = Radreply;
