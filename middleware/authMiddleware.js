const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET || '72a00b874fc851ef89dbf4d85efc7385352c8e049e732f6681f76e7d893064b990418ae15e4d4a012b5eca810062e8c2a2af55f1b3930f35761121412a392398';

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
