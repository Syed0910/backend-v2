// models/RoleHasPermission.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Adjust path to your DB config

const RoleHasPermission = sequelize.define("RoleHasPermission", {
  permission_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
    primaryKey: true,
  },
  role_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
    primaryKey: true,
  },
}, {
  tableName: "role_has_permissions",
  timestamps: false,
});

module.exports = RoleHasPermission;
