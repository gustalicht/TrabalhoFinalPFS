module.exports = {
    up: async (queryInterface) => {
      return queryInterface.bulkInsert('Usuarios', [
        {
          Nome: 'Admin',
          Email: 'admin@email.com',
          SenhaHash: '$2a$10$XcP1yPj10ZkErl9W3zxYe.KmCf8CFDl9z7nRWMRGLFzGH0OVGV8m6', // senha123 hash
          DataCriacao: new Date(),
        },
      ]);
    },
  
    down: async (queryInterface) => {
      return queryInterface.bulkDelete('Usuarios', null, {});
    },
  };
  