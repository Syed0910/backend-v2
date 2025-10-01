// src/models/teamInvitation.model.js

const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const TeamInvitation = sequelize.define("TeamInvitation", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  team_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
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
  tableName: "team_invitations",
  timestamps: false,
});

module.exports = TeamInvitation;
