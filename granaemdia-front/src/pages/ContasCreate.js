import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateAccount = () => {
  const [formData, setFormData] = useState({ Nome: '', Saldo: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const token = localStorage.getItem('token'); // Pega o token salvo no login
      const response = await fetch('http://localhost:3100/api/contas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Conta criada com sucesso!');
        navigate('/dashboard'); // Redireciona para o dashboard
      } else {
        setError(data.message || 'Erro ao criar conta.');
      }
    } catch (error) {
      console.error('Erro ao criar conta:', error);
      setError('Erro ao conectar ao servidor.');
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ background: 'linear-gradient(to right, #89A8B2, #B3C8CF, #E5E1DA, #F1F0E8)' }}
    >
      <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Criar Conta</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="Nome" className="form-label">
              Nome da Conta
            </label>
            <input
              type="text"
              id="Nome"
              name="Nome"
              className="form-control"
              placeholder="Nome da conta"
              value={formData.Nome}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Saldo" className="form-label">
              Saldo Inicial
            </label>
            <input
              type="number"
              id="Saldo"
              name="Saldo"
              className="form-control"
              placeholder="Saldo atual"
              value={formData.Saldo}
              onChange={handleChange}
              required
            />
          </div>

          {error && <p className="text-danger text-center">{error}</p>}

          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{ backgroundColor: '#89A8B2', border: 'none' }}
          >
            Criar Conta
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
