const { Sequelize } = require('sequelize');
require('dotenv').config();

const db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'postgres',
        port: process.env.PORT,
        logging: false,
        define: {
            freezeTableName: true, // Usa o nome da tabela como está definido, sem pluralização
            underscored: false, // Usa nomes de colunas e tabelas com PascalCase
            timestamps: false, // Evita criar colunas updatedAt e createdAt
          },
    }
);

module.exports = db;
