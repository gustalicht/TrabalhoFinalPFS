module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Conta', 'UsuarioID', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Usuario',
        key: 'ID',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Conta', 'UsuarioID');
  },
};
