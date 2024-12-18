import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Dashboard = () => {
  const [saldo, setSaldo] = useState(0);
  const [tendencia, setTendencia] = useState('');
  const [dados, setDados] = useState({ receitas: [], despesas: [] });

  // Busca dados do backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3100/api/contas/1'); // Substituir com o ID do usuário
        const conta = await response.json();

        const receitas = await fetch('http://localhost:3100/api/receitas');
        const despesas = await fetch('http://localhost:3100/api/despesas');

        const receitaData = await receitas.json();
        const despesaData = await despesas.json();

        setSaldo(conta.saldo);

        // Simples cálculo da tendência
        const totalReceitas = receitaData.reduce((acc, r) => acc + r.Valor, 0);
        const totalDespesas = despesaData.reduce((acc, d) => acc + d.Valor, 0);

        setTendencia(totalReceitas > totalDespesas ? 'Positiva' : 'Negativa');
        setDados({ receitas: receitaData, despesas: despesaData });
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Painel Financeiro</h1>

      <div className="mb-4">
        <h3>Saldo Atual: R$ {saldo.toFixed(2)}</h3>
        <h4 className={tendencia === 'Positiva' ? 'text-success' : 'text-danger'}>
          Tendência: {tendencia}
        </h4>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h4>Receitas</h4>
          <LineChart width={400} height={300} data={dados.receitas}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Data" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Valor" stroke="#28a745" name="Receitas" />
          </LineChart>
        </div>
        <div className="col-md-6">
          <h4>Despesas</h4>
          <LineChart width={400} height={300} data={dados.despesas}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Data" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Valor" stroke="#dc3545" name="Despesas" />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
