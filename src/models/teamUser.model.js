// src/models/teamUser.model.js

const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const TeamUser = sequelize.define("TeamUser", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  team_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
  },
  role: {
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
  }
}, {
  tableName: "team_user",
  timestamps: false,
  indexes: [
    {
      unique: true,
      fields: ["team_id", "user_id"]
    }
  ]
});

module.exports = TeamUser;
