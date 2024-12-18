import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ Email: '', senha: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Validação de e-mail

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validação do e-mail
    if (!validateEmail(formData.Email)) {
      setError('Por favor, insira um e-mail válido.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3100/api/usuarios/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        alert('Login realizado com sucesso!');
        navigate('/dashboard'); // Redireciona para o Dashboard
      } else {
        setError('E-mail ou senha inválidos.');
      }
    } catch (error) {
      console.error('Erro ao realizar login:', error);
      setError('Erro ao conectar com o servidor. Tente novamente.');
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
        <h2 className="text-center mb-4">Conecte-se</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="Email"
              className="form-control"
              placeholder="example@gmail.com"
              value={formData.Email}
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

          {error && <p className="text-danger text-center">{error}</p>}

          <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#89A8B2', border: 'none' }}>
            Entrar
          </button>
        </form>

        <div className="text-center mt-3">
          <p>
            Não possui uma conta?{' '}
            <Link to="/register" className="fw-bold" style={{ color: '#89A8B2' }}>
              Cadastre-se
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
