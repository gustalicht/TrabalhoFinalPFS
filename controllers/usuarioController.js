const { Usuario } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET || 'seusegredo';


module.exports = {
  async register(req, res) {
    try {
      const { Nome, Email, senha } = req.body;

      // Verificar se o usuário já existe
      const existingUser = await Usuario.findOne({ where: { Email } });
      if (existingUser) {
        return res.status(400).json({ message: 'Email já cadastrado.' });
      }

      // Criptografar senha
      const senhaHash = await bcrypt.hash(senha, 10);

      // Criar o usuário
      const newUser = await Usuario.create({
        Nome,
        Email,
        SenhaHash: senhaHash,
      });

      return res.status(201).json({ message: 'Usuário criado com sucesso!' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  },

  async login(req, res) {
    try {
      const { Email, senha } = req.body;

      // Buscar o usuário no banco de dados
      const user = await Usuario.findOne({ where: { Email } });
      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado.' });
      }

      // Validar a senha
      const isPasswordValid = await bcrypt.compare(senha, user.SenhaHash);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Senha inválida.' });
      }

      // Gerar token JWT
      const token = jwt.sign({ id: user.ID, email: user.Email }, process.env.SECRET_KEY, {
        expiresIn: '1h',
      });

      return res.status(200).json({ token });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  },
};
