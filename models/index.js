const Sequelize = require('sequelize');
const db = require('../config/database');

// Importação das models
const UsuarioModel = require('./usuario');
const ContaModel = require('./conta');
const CategoriaModel = require('./categoria');
const ReceitaModel = require('./receita');
const DespesaModel = require('./despesa');

// Inicialização das models
const Usuario = UsuarioModel.init(db, Sequelize);
const Conta = ContaModel.init(db, Sequelize);
const Categoria = CategoriaModel.init(db, Sequelize);
const Receita = ReceitaModel.init(db, Sequelize);
const Despesa = DespesaModel.init(db, Sequelize);

// Definição dos relacionamentos APÓS a inicialização
Usuario.hasMany(Conta, { foreignKey: 'UsuarioID', as: 'contas' });
Conta.belongsTo(Usuario, { foreignKey: 'UsuarioID', as: 'usuario' });

Conta.hasMany(Receita, { foreignKey: 'ContaID', as: 'receitas' });
Receita.belongsTo(Conta, { foreignKey: 'ContaID', as: 'conta' });

Conta.hasMany(Despesa, { foreignKey: 'ContaID', as: 'despesas' });
Despesa.belongsTo(Conta, { foreignKey: 'ContaID', as: 'conta' });

Categoria.hasMany(Receita, { foreignKey: 'CategoriaID', as: 'receitas' });
Receita.belongsTo(Categoria, { foreignKey: 'CategoriaID', as: 'categoria' });

Categoria.hasMany(Despesa, { foreignKey: 'CategoriaID', as: 'despesas' });
Despesa.belongsTo(Categoria, { foreignKey: 'CategoriaID', as: 'categoria' });

// Exportação das models
module.exports = {
  db,
  Usuario,
  Conta,
  Categoria,
  Receita,
  Despesa,
};
