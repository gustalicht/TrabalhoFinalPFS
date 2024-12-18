'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Adiciona a coluna ContaID na tabela Receita
    await queryInterface.addColumn('Receita', 'ContaID', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Conta', // Nome da tabela Conta
        key: 'ID',      // Chave primária da tabela Conta
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });

    // Adiciona a coluna ContaID na tabela Despesa
    await queryInterface.addColumn('Despesa', 'ContaID', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Conta', // Nome da tabela Conta
        key: 'ID',      // Chave primária da tabela Conta
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  async down(queryInterface, Sequelize) {
    // Remove a coluna ContaID da tabela Receita
    await queryInterface.removeColumn('Receita', 'ContaID');

    // Remove a coluna ContaID da tabela Despesa
    await queryInterface.removeColumn('Despesa', 'ContaID');
  },
};
