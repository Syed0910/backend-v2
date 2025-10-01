const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Radpostauth = sequelize.define('Radpostauth', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING(64),
    allowNull: false,
    defaultValue: ''
  },
  pass: {
    type: DataTypes.STRING(64),
    allowNull: false,
    defaultValue: ''
  },
  reply: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  nasipaddress: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  nasportid: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  mac: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  authdate: {
    type: DataTypes.DATE(6),
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  class: {
    type: DataTypes.STRING(64),
    allowNull: true
  }
}, {
  tableName: 'radpostauth',
  timestamps: false
});

module.exports = Radpostauth;
