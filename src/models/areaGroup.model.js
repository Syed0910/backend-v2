const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const AreaGroup = sequelize.define("AreaGroup", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  group_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  area_id: {
    type: DataTypes.INTEGER,
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
  created_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true,
  }
}, {
  tableName: "area_groups",
  timestamps: false,
});

module.exports = AreaGroup;
