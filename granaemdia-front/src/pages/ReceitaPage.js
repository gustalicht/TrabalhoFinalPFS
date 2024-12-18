import React, { useState } from 'react';

const AddReceitaPage = () => {
  const [formData, setFormData] = useState({ descricao: '', valor: '', data: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Receita adicionada:', formData);
    // Aqui vai a lógica para enviar os dados para a API
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Adicionar Receita</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Descrição:</label>
          <input
            type="text"
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Valor:</label>
          <input
            type="number"
            name="valor"
            value={formData.valor}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Data:</label>
          <input
            type="date"
            name="data"
            value={formData.data}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default AddReceitaPage;
