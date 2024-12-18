const { Conta, Usuario } = require('../models/conta');

module.exports = {
  async create(req, res) {
    try {
      const { usuarioId, nome, saldo } = req.body;

      // Verificar se o usuário existe
      const user = await Usuario.findByPk(usuarioId);
      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado.' });
      }

      const conta = await Conta.create({ UsuarioID: usuarioId, Nome: nome, Saldo: saldo });
      return res.status(201).json({ message: 'Conta criada com sucesso!', conta });
    } catch (error) {
      return res.status(500).json({ error: error.message });
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
