import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  const [saldoAtual, setSaldoAtual] = useState(0);
  const [receitas, setReceitas] = useState([]);
  const [despesas, setDespesas] = useState([]);

  // Simula o carregamento das receitas, despesas e saldo inicial
  useEffect(() => {
    // Substituir com chamadas à API quando o back-end estiver pronto
    const fetchDados = async () => {
      try {
        const responseContas = await fetch('http://localhost:3100/api/contas');
        const contasData = await responseContas.json();

        const responseReceitas = await fetch('http://localhost:3100/api/receitas');
        const receitasData = await responseReceitas.json();

        const responseDespesas = await fetch('http://localhost:3100/api/despesas');
        const despesasData = await responseDespesas.json();

        // Simula o saldo inicial da conta e atualiza com base em receitas e despesas
        const saldoInicial = contasData[0]?.saldo || 0;
        const totalReceitas = receitasData.reduce((acc, receita) => acc + receita.valor, 0);
        const totalDespesas = despesasData.reduce((acc, despesa) => acc + despesa.valor, 0);

        setReceitas(receitasData);
        setDespesas(despesasData);
        setSaldoAtual(saldoInicial + totalReceitas - totalDespesas);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchDados();
  }, []);

  return (
    <div
      className="vh-100 d-flex flex-column"
      style={{
        background: 'linear-gradient(to right, #89A8B2, #B3C8CF, #E5E1DA, #F1F0E8)',
      }}
    >
      {/* Cabeçalho */}
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#89A8B2' }}>
        <div className="container">
          <span className="navbar-brand">Painel Financeiro</span>
          <div>
            <Link to="/adicionar-receita" className="btn btn-light me-2">
              Adicionar Receita
            </Link>
            <Link to="/adicionar-despesa" className="btn btn-light">
              Adicionar Despesa
            </Link>
          </div>
        </div>
      </nav>

      {/* Conteúdo Principal */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="mb-4">Saldo Atual</h2>
            <h3
              style={{
                color: saldoAtual >= 0 ? '#28a745' : '#dc3545',
                fontSize: '2rem',
              }}
            >
              R$ {saldoAtual.toFixed(2)}
            </h3>
          </div>
        </div>

        <div className="row mt-4">
          {/* Gráfico de Receitas */}
          <div className="col-md-6">
            <h4>Receitas</h4>
            <ul className="list-group">
              {receitas.map((receita, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between">
                  <span>{receita.descricao}</span>
                  <span className="text-success">+R$ {receita.valor.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Gráfico de Despesas */}
          <div className="col-md-6">
            <h4>Despesas</h4>
            <ul className="list-group">
              {despesas.map((despesa, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between">
                  <span>{despesa.descricao}</span>
                  <span className="text-danger">-R$ {despesa.valor.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
