const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ImportFailed = sequelize.define("ImportFailed", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  subscriber_username: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  import_status: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  failed_message: {
    type: DataTypes.TEXT,
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
  action_by_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  action_by_username: {
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
  tableName: "import_faileds",
  timestamps: false,
  indexes: [
    {
      fields: ["subscriber_username"]
    }
  ]
});

module.exports = ImportFailed;
