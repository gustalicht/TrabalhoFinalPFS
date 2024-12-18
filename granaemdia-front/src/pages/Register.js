import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Validação básica de email
    return emailRegex.test(email);
  };
  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!validateEmail(formData.email)) {
        setError('Por favor, insira um e-mail válido.');
        return; // Interrompe a execução se o e-mail for inválido
      }
      const response = await fetch('http://localhost:3100/api/usuarios/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      alert('Cadastro realizado com sucesso!');
    } catch (error) {
      console.error('Erro ao realizar cadastro:', error);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: 'linear-gradient(to right, #89A8B2, #B3C8CF, #E5E1DA, #F1F0E8)',
      }}
    >
      <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Cadastre-se</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nome" className="form-label">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              className="form-control"
              placeholder="Seu nome completo"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3 position-relative">
            <label htmlFor="senha" className="form-label">
              Senha
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="senha"
              name="senha"
              className="form-control"
              placeholder="******"
              value={formData.senha}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="btn btn-link position-absolute end-0 top-50 translate-middle-y"
              onClick={togglePasswordVisibility}
              style={{ textDecoration: 'none', fontSize: '1.2rem' }}
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>

          <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#89A8B2', border: 'none' }}>
            Cadastrar
          </button>
        </form>

        <div className="text-center mt-3">
          <p>
            Já possui uma conta?{' '}
            <Link to="/login" className="fw-bold" style={{ color: '#89A8B2' }}>
              Faça login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
