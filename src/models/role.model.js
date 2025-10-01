// models/role.model.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Adjust path as needed

const Role = sequelize.define("Role", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role_type: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  guard_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isp_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  branch_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  created_by: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  updated_by: {
    type: DataTypes.INTEGER,
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
  tableName: "roles",
  timestamps: false, // Set to true if your DB auto-manages timestamps
});

module.exports = Role;
