const Sequelize = require('sequelize');
const db = require('../config/database');

// Importação dos modelos
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

// Definição dos relacionamentos
Usuario.hasMany(Conta, { foreignKey: 'UsuarioID' });
Conta.belongsTo(Usuario, { foreignKey: 'UsuarioID' });

Conta.hasMany(Receita, { foreignKey: 'ContaID' });
Receita.belongsTo(Conta, { foreignKey: 'ContaID' });

Conta.hasMany(Despesa, { foreignKey: 'ContaID' });
Despesa.belongsTo(Conta, { foreignKey: 'ContaID' });

Categoria.hasMany(Receita, { foreignKey: 'CategoriaID' });
Receita.belongsTo(Categoria, { foreignKey: 'CategoriaID' });

Categoria.hasMany(Despesa, { foreignKey: 'CategoriaID' });
Despesa.belongsTo(Categoria, { foreignKey: 'CategoriaID' });

// Exporta os modelos e o banco de dados
module.exports = {
  db,
  Usuario,
  Conta,
  Categoria,
  Receita,
  Despesa,
};
