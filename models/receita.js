const { Model, DataTypes } = require('sequelize');

class Receita extends Model {
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
        },
        CategoriaID: {
          type: DataTypes.INTEGER,
          allowNull: false,
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
        tableName: 'Receita',
        timestamps: false,
      }
    );
    return this;
  }
}

module.exports = Receita;
