import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const dataReceitas = [
  { name: 'Jan', valor: 4000 },
  { name: 'Fev', valor: 3000 },
  { name: 'Mar', valor: 5000 },
  { name: 'Abr', valor: 7000 },
];

const dataDespesas = [
  { name: 'Jan', valor: 2500 },
  { name: 'Fev', valor: 2000 },
  { name: 'Mar', valor: 3000 },
  { name: 'Abr', valor: 4500 },
];

const Dashboard = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Dashboard Financeiro</h2>

      {/* Gráfico de Receitas */}
      <div>
        <h3>Receitas</h3>
        <LineChart width={500} height={300} data={dataReceitas}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="valor" stroke="#28a745" name="Receitas" />
        </LineChart>
      </div>

      {/* Gráfico de Despesas */}
      <div style={{ marginTop: '40px' }}>
        <h3>Despesas</h3>
        <LineChart width={500} height={300} data={dataDespesas}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="valor" stroke="#dc3545" name="Despesas" />
        </LineChart>
      </div>
    </div>
  );
};

export default Dashboard;
