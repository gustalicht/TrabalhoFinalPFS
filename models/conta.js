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
          type: DataTypes.STRING,
          allowNull: false,
        },
        Saldo: {
          type: DataTypes.FLOAT,
          defaultValue: 0.0,
        },
        UsuarioID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'Usuario',
            key: 'ID',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      },
      {
        sequelize,
        tableName: 'Conta',
        timestamps: false,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Usuario, { foreignKey: 'UsuarioID', as: 'usuario' });
    this.hasMany(models.Receita, { foreignKey: 'ContaID', as: 'receitas' });
    this.hasMany(models.Despesa, { foreignKey: 'ContaID', as: 'despesas' });
  }
}

module.exports = Conta;
