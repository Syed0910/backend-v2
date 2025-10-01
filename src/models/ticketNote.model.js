// src/models/ticketNote.model.js

const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const TicketNote = sequelize.define("TicketNote", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  ticket_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  note: {
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
  tableName: "ticket_notes",
  timestamps: false
});

module.exports = TicketNote;
