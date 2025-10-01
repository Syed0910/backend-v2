const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const RestrictedConnection = sequelize.define("RestrictedConnection", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  type: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  value: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  is_allowed: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  profile_type: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  profile_username: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  profile_user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  isp_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  branch_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  created_by_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  created_by_username: {
    type: DataTypes.STRING(255),
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
  tableName: "restricted_connections",
  timestamps: false,
});

module.exports = RestrictedConnection;
