const { Categoria } = require('../models');

module.exports = {
  async getAll(req, res) {
    try {
      const categorias = await Categoria.findAll();
      return res.status(200).json(categorias);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async create(req, res) {
    try {
      const { descricao } = req.body;

      const categoria = await Categoria.create({ Descricao: descricao });
      return res.status(201).json({ message: 'Categoria criada com sucesso!', categoria });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};
