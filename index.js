const app = require('./app');

const PORT = process.env.SERVER_PORT || 3100;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
