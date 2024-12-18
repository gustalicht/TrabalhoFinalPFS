const express = require('express');
const usuarioController = require('../controllers/usuarioController');
const contaController = require('../controllers/contaController');
const receitaController = require('../controllers/receitaController');
const despesaController = require('../controllers/despesaController');
const categoriaController = require('../controllers/categoriaController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/usuarios/register', usuarioController.register);
router.post('/usuarios/login', usuarioController.login);

router.post('/contas', authMiddleware, contaController.create);
router.get('/contas', authMiddleware, contaController.getAll);

router.post('/receitas', authMiddleware, receitaController.create);
router.post('/despesas', authMiddleware, despesaController.create);

router.get('/categorias', authMiddleware, categoriaController.getAll);
router.post('/categorias', authMiddleware, categoriaController.create);

module.exports = router;
