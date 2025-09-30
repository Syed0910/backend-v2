const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const IPPool = sequelize.define("IPPool", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  pool_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  network: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  subnet: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  nas_id: {
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
    type: DataTypes.STRING,
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
  tableName: "ip_pools",
  timestamps: false,
  indexes: [
    { fields: ["pool_name"] },
  ],
});

module.exports = IPPool;
