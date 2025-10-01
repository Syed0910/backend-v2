const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const NasGroup = sequelize.define("NasGroup", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  group_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nas_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  isp_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  branch_id: {
    type: DataTypes.INTEGER,
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
  tableName: "nas_groups",
  timestamps: false, // using manual timestamps
  indexes: [
    {
      name: "nas_groups_group_name_nas_id_index",
      fields: ["group_name", "nas_id"]
    }
  ]
});

module.exports = NasGroup;
