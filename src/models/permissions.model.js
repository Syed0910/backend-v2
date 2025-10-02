const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Permission = sequelize.define("Permission", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  guard_name: {
    type: DataTypes.STRING,
    allowNull: false,
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
  tableName: "permissions",
  timestamps: false, // You can set this to true if Sequelize should auto-manage timestamps
});

module.exports = Permission;
