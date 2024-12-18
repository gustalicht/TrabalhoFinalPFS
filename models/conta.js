const { Model, DataTypes } = require('sequelize');

class Conta extends Model {
  static init(sequelize) {
    return super.init(
      {
        ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        UsuarioID: { type: DataTypes.INTEGER, allowNull: false },
        Nome: { type: DataTypes.STRING, allowNull: false },
        Saldo: { type: DataTypes.DECIMAL(18, 2), allowNull: false, defaultValue: 0.0 },
      },
      { sequelize, tableName: 'Conta', timestamps: false }
    );
  }
}

module.exports = Conta;
