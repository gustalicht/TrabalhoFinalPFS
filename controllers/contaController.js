const { Conta, Usuario } = require('../models');

module.exports = {
  async create(req, res) {
    try {
      const { UsuarioID, nome, saldo } = req.body;

      // Verifica se o usuário existe
      const usuario = await Usuario.findByPk(UsuarioID);
      if (!usuario) {
        return res.status(404).json({ error: 'Usuário não encontrado.' });
      }

      // Cria a conta associada ao usuário
      const conta = await Conta.create({ UsuarioID, Nome: nome, Saldo: saldo });

      return res.status(201).json({ message: 'Conta criada com sucesso!', conta });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao criar a conta.' });
    }
  },

  async getAll(req, res) {
    try {
      const contas = await Conta.findAll();
      return res.status(200).json(contas);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};
