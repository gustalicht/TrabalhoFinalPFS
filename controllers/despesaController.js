const { Despesa, Conta, Categoria } = require('../models');

module.exports = {
  
  async getAllDespesas(req, res) {
    try {
      const despesas = await Despesa.findAll({ where: { ContaID: req.user.id } });
      return res.status(200).json(despesas);
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

      const despesa = await Despesa.create({
        ContaID: ContaID,
        CategoriaID: CategoriaID,
        Valor: Valor,
        Descricao: Descricao,
      });

      return res.status(201).json({ message: 'Despesa criada com sucesso!', despesa });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};
