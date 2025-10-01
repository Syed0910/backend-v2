const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Session = sequelize.define("Session", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true,
  },
  ip_address: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  user_agent: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  payload: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  last_activity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: "sessions",
  timestamps: false,
});

module.exports = Session;
