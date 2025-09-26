const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Radacct = sequelize.define('Radacct', {
  radacctid: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  acctsessionid: {
    type: DataTypes.STRING(64),
    allowNull: false,
    defaultValue: ''
  },
  acctuniqueid: {
    type: DataTypes.STRING(32),
    allowNull: false,
    unique: true,
    defaultValue: ''
  },
  username: {
    type: DataTypes.STRING(64),
    allowNull: false,
    defaultValue: ''
  },
  realm: DataTypes.STRING(64),
  nasipaddress: {
    type: DataTypes.STRING(15),
    allowNull: false,
    defaultValue: ''
  },
  nasportid: DataTypes.STRING,
  nasporttype: DataTypes.STRING(32),
  acctstarttime: DataTypes.DATE,
  acctupdatetime: DataTypes.DATE,
  acctstoptime: DataTypes.DATE,
  acctinterval: DataTypes.INTEGER,
  acctsessiontime: DataTypes.INTEGER.UNSIGNED,
  acctauthentic: DataTypes.STRING(32),
  connectinfo_start: DataTypes.STRING(128),
  connectinfo_stop: DataTypes.STRING(128),
  acctinputoctets: DataTypes.BIGINT,
  acctoutputoctets: DataTypes.BIGINT,
  calledstationid: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: ''
  },
  callingstationid: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: ''
  },
  acctterminatecause: {
    type: DataTypes.STRING(32),
    allowNull: false,
    defaultValue: ''
  },
  servicetype: DataTypes.STRING(32),
  framedprotocol: DataTypes.STRING(32),
  framedipaddress: {
    type: DataTypes.STRING(15),
    allowNull: false,
    defaultValue: ''
  },
  framedipv6address: {
    type: DataTypes.STRING(45),
    allowNull: false,
    defaultValue: ''
  },
  framedipv6prefix: {
    type: DataTypes.STRING(45),
    allowNull: false,
    defaultValue: ''
  },
  framedinterfaceid: {
    type: DataTypes.STRING(44),
    allowNull: false,
    defaultValue: ''
  },
  delegatedipv6prefix: {
    type: DataTypes.STRING(45),
    allowNull: false,
    defaultValue: ''
  },
  class: DataTypes.STRING(64)
}, {
  tableName: 'radacct',
  timestamps: false
});

module.exports = Radacct;
