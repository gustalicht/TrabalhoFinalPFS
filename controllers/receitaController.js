const { Receita, Conta, Categoria } = require('../models');

module.exports = {
  async create(req, res) {
    try {
      const { contaId, categoriaId, valor, descricao } = req.body;

      const conta = await Conta.findByPk(contaId);
      if (!conta) return res.status(404).json({ message: 'Conta não encontrada.' });

      const receita = await Receita.create({
        ContaID: contaId,
        CategoriaID: categoriaId,
        Valor: valor,
        Descricao: descricao,
      });

      return res.status(201).json({ message: 'Receita criada com sucesso!', receita });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};
