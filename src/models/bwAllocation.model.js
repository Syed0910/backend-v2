const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const BwAllocation = sequelize.define("BwAllocation", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  groupname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  day: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  start_time: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  end_time: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  policy_group: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bandwidth: {
    type: DataTypes.STRING,
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
  }
}, {
  tableName: "bw_allocations",
  timestamps: false,
});

module.exports = BwAllocation;
