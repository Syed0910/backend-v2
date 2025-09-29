const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Package = require("./package.model"); // <-- fixed import

const Subscriber = sequelize.define(
  "Subscriber",
  {
    id: { type: DataTypes.BIGINT.UNSIGNED, autoIncrement: true, primaryKey: true },
    fullname: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING(100), allowNull: false, unique: true },
    address: { type: DataTypes.STRING },
    package_id: { type: DataTypes.INTEGER, allowNull: false },
    connection_status: { type: DataTypes.INTEGER, defaultValue: 1 },
    created_at: { type: DataTypes.DATE },
    expiration_date: { type: DataTypes.DATE },
  },
  {
    tableName: "subscribers",
    timestamps: false,
  }
);

// Relation to Package
Subscriber.belongsTo(Package, { foreignKey: "package_id", as: "package" });

module.exports = Subscriber;
