const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Radacct = sequelize.define(
  "Radacct",
  {
    radacctid: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    acctsessionid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    acctuniqueid: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    realm: DataTypes.STRING,
    nasipaddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nasportid: DataTypes.STRING,
    nasporttype: DataTypes.STRING,
    acctstarttime: DataTypes.DATE,
    acctupdatetime: DataTypes.DATE,
    acctstoptime: DataTypes.DATE,
    acctinterval: DataTypes.INTEGER,
    acctsessiontime: DataTypes.INTEGER.UNSIGNED,
    acctauthentic: DataTypes.STRING,
    connectinfo_start: DataTypes.STRING,
    connectinfo_stop: DataTypes.STRING,
    acctinputoctets: DataTypes.BIGINT,
    acctoutputoctets: DataTypes.BIGINT,
    calledstationid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    callingstationid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    acctterminatecause: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    servicetype: DataTypes.STRING,
    framedprotocol: DataTypes.STRING,
    framedipaddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    framedipv6address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    framedipv6prefix: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    framedinterfaceid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    delegatedipv6prefix: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    class: DataTypes.STRING,
  },
  {
    tableName: "radacct",
    timestamps: false,
  }
);

module.exports = Radacct;
