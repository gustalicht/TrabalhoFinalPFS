const { Despesa, Conta, Categoria } = require('../models/despesa');

module.exports = {
  async create(req, res) {
    try {
      const { contaId, categoriaId, valor, descricao } = req.body;

      const conta = await Conta.findByPk(contaId);
      if (!conta) return res.status(404).json({ message: 'Conta não encontrada.' });

      const despesa = await Despesa.create({
        ContaID: contaId,
        CategoriaID: categoriaId,
        Valor: valor,
        Descricao: descricao,
      });

      return res.status(201).json({ message: 'Despesa criada com sucesso!', despesa });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};
