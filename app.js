require('dotenv').config();
const express = require('express');
const cors = require('cors');
const errorMiddleware = require('./middleware/errorMiddleware');
const apiRoutes = require('./routes/api');
const { db } = require('./models'); // Importa a conexão e models

const app = express();


// Configuração de Middlewares
app.use(cors());
app.use(express.json());

// Conexão com o banco de dados
db.authenticate()
  .then(() => console.log("Conectado ao banco de dados com sucesso!"))
  .catch((err) => {
    console.error("Erro ao conectar ao banco de dados:", err);
    process.exit(1);
  });

// Rotas da API
app.use('/api', apiRoutes);

// Middleware de tratamento de erros
app.use(errorMiddleware);

module.exports = app;
