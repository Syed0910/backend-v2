const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Setting = sequelize.define("Setting", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  isp_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  branch_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  group: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  locked: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  payload: {
    type: DataTypes.JSON, // ✅ JSON type ensures Sequelize auto-parses if stored as JSON
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
  tableName: "settings",
  timestamps: false,
});

module.exports = Setting;
