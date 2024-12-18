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
          type: DataTypes.STRING,
          allowNull: false,
        },
        Email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        SenhaHash: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        DataCriacao: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
      },
      {
        sequelize,
        tableName: 'Usuario',
        timestamps: false,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Conta, { foreignKey: 'UsuarioID', as: 'contas' });
  }
}

module.exports = Usuario;
