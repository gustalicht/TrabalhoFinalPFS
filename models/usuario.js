const { Model, DataTypes } = require('sequelize');

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        ID: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        Nome: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        Email: {
          type: DataTypes.STRING(100),
          allowNull: false,
          unique: true,
        },
        SenhaHash: {
          type: DataTypes.STRING(256),
          allowNull: false,
        },
        DataCriacao: {
          type: DataTypes.DATE,
          defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        },
      },
      {
        sequelize,
        tableName: 'Usuario',
        timestamps: false,
      }
    );
    return this;
  }
}

module.exports = Usuario;
