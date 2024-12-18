'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Despesa', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      valor: {
        type: Sequelize.DECIMAL(18, 2),
        allowNull: false,
      },
      data: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
        allowNull: false,
      },
      descricao: {
        type: Sequelize.STRING,
      },
      contaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Conta',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      categoriaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Categoria',
          key: 'id',
        },
        onDelete: 'RESTRICT',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Despesa');
  }
};
