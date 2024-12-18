const { Model, DataTypes } = require('sequelize');

class Despesa extends Model {
  static init(sequelize) {
    super.init(
      {
        ID: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        ContaID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'Conta', // Nome da tabela no banco
            key: 'ID', // Nome da coluna na tabela relacionada
          },
        },
        CategoriaID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'Categoria', // Nome da tabela no banco
            key: 'ID', // Nome da coluna na tabela relacionada
          },
        },
        Valor: {
          type: DataTypes.DECIMAL(18, 2),
          allowNull: false,
        },
        Data: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
        Descricao: {
          type: DataTypes.STRING(255),
        },
      },
      {
        sequelize,
        tableName: 'Despesa',
        timestamps: false,
      }
    );
    return this;
  }
}

module.exports = Despesa;
