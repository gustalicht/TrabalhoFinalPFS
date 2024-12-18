const { Model, DataTypes } = require('sequelize');

class Conta extends Model {
  static init(sequelize) {
    super.init(
      {
        ID: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        Nome: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        Saldo: {
          type: DataTypes.DECIMAL(18, 2),
          allowNull: false,
          defaultValue: 0.0,
        },
        UsuarioID: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'Conta',
        timestamps: false, // Remove os campos updatedAt e createdAt
      }
    );
    return this;
  }
}

module.exports = Conta;
