const { Receita, Conta, Categoria } = require('../models');

module.exports = {
  async getAllReceitas(req, res) {
    try {
      const receitas = await Receita.findAll({ where: { ContaID: req.user.id } });
      return res.status(200).json(receitas);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  },
  async create(req, res) {
    try {
      const { ContaID, CategoriaID, Valor, Descricao } = req.body;

      const conta = await Conta.findByPk(ContaID);
      if (!conta) return res.status(404).json({ message: 'Conta não encontrada.' });

      const receita = await Receita.create({
        ContaID: ContaID,
        CategoriaID: CategoriaID,
        Valor: Valor,
        Descricao: Descricao,
      });

      return res.status(201).json({ message: 'Receita criada com sucesso!', receita });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};
