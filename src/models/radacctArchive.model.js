const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const RadacctArchive = sequelize.define("RadacctArchive", {
  radacctid: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  acctsessionid: {
    type: DataTypes.STRING(64),
    allowNull: false,
    defaultValue: '',
  },
  acctuniqueid: {
    type: DataTypes.STRING(32),
    allowNull: false,
    defaultValue: '',
    unique: true,
  },
  username: {
    type: DataTypes.STRING(64),
    allowNull: false,
    defaultValue: '',
  },
  groupname: {
    type: DataTypes.STRING(64),
    allowNull: false,
    defaultValue: '',
  },
  realm: DataTypes.STRING(64),
  nasipaddress: {
    type: DataTypes.STRING(15),
    allowNull: false,
    defaultValue: '',
  },
  nasportid: DataTypes.STRING(100),
  nasporttype: DataTypes.STRING(32),
  acctstarttime: DataTypes.DATE,
  acctupdatetime: DataTypes.DATE,
  acctstoptime: DataTypes.DATE,
  acctinterval: DataTypes.INTEGER,
  acctsessiontime: DataTypes.INTEGER.UNSIGNED,
  acctauthentic: DataTypes.STRING(32),
  connectinfo_start: DataTypes.STRING(50),
  connectinfo_stop: DataTypes.STRING(50),
  acctinputoctets: DataTypes.BIGINT,
  acctoutputoctets: DataTypes.BIGINT,
  calledstationid: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: '',
  },
  callingstationid: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: '',
  },
  acctterminatecause: {
    type: DataTypes.STRING(32),
    allowNull: false,
    defaultValue: '',
  },
  servicetype: DataTypes.STRING(32),
  framedprotocol: DataTypes.STRING(32),
  framedipaddress: {
    type: DataTypes.STRING(15),
    allowNull: false,
    defaultValue: '',
  },
}, {
  tableName: "radacct_archive",
  timestamps: false,
});

module.exports = RadacctArchive;
