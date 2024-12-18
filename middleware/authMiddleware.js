const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET || 'seusegredo';

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Pega o token do header

  if (!token) {
    return res.status(401).json({ error: 'Acesso negado. Token não fornecido.' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY); // Verifica o token
    req.usuario = decoded; // Adiciona os dados do usuário ao objeto req
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Token inválido ou expirado.' });
  }
};

module.exports = authMiddleware;
