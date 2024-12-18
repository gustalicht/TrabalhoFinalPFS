import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContasCreate = () => {
  const [formData, setFormData] = useState({
    UsuarioID: '', // O ID do usuário que já está autenticado
    nome: '',
    saldo: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:3100/api/contas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}`, },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Conta criada com sucesso!');
        navigate('/dashboard'); // Redireciona para o dashboard
      } else {
        setError('Erro ao criar conta. Verifique os dados.');
      }
    } catch (err) {
      setError('Erro ao conectar com o servidor.');
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
            <label className="form-label">ID do Usuário</label>
            <input
              type="text"
              name="UsuarioID"
              value={formData.UsuarioID}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Nome da Conta</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Saldo Inicial</label>
            <input
              type="number"
              name="saldo"
              value={formData.saldo}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          {error && <p className="text-danger">{error}</p>}

          <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#89A8B2' }}>
            Criar Conta
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContasCreate;
