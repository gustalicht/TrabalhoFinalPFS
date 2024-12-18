const { Model, DataTypes } = require('sequelize');

class Categoria extends Model {
  static init(sequelize) {
    super.init(
      {
        ID: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        Descricao: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'Categoria',
        timestamps: false,
      }
    );
    return this;
  }
}

module.exports = Categoria;
