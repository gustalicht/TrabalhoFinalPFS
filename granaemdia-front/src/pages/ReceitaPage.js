import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddReceita = () => {
  const [formData, setFormData] = useState({
    Descricao: '',
    Valor: '',
    Data: '',
    CategoriaID: '',
    ContaID: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const token = localStorage.getItem('token'); // Pega o token JWT do localStorage

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Busca as contas vinculadas ao usuário logado
    const responseContas = await fetch('http://localhost:3100/api/contas', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const contasData = await responseContas.json();
    const ContaID = contasData[0]?.ID; // Seleciona a primeira conta vinculada ao usuário

    const response = await fetch('http://localhost:3100/api/receitas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ ...formData, ContaID }), // Adiciona automaticamente o ContaID
    });


      const data = await response.json();
      if (response.ok) {
        alert('Receita adicionada com sucesso!');
        navigate('/dashboard'); // Redireciona para o dashboard
      } else {
        setError(data.message || 'Erro ao adicionar receita.');
      }
    } catch (err) {
      console.error(err);
      setError('Erro ao conectar ao servidor.');
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center vh-100"
      style={{ background: 'linear-gradient(to right, #89A8B2, #B3C8CF, #E5E1DA, #F1F0E8)' }}
    >
      <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Adicionar Receita</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="descricao" className="form-label">
              Descrição
            </label>
            <input
              type="text"
              id="Descricao"
              name="Descricao"
              className="form-control"
              value={formData.Descricao}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="valor" className="form-label">
              Valor
            </label>
            <input
              type="number"
              id="Valor"
              name="Valor"
              className="form-control"
              value={formData.Valor}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="categoriaID" className="form-label">
              Categoria ID
            </label>
            <input
              type="number"
              id="CategoriaID"
              name="CategoriaID"
              className="form-control"
              value={formData.CategoriaID}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-2">
            Adicionar
          </button>
          <button type="button" className="btn btn-secondary w-100" onClick={() => navigate('/dashboard')}>
            Voltar
          </button>
        </form>
        {error && <p className="text-danger text-center mt-3">{error}</p>}
      </div>
    </div>
  );
};

export default AddReceita;
