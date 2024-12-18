import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', senha: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook para redirecionamento

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      console.log({ email, password });
      // Aqui você pode adicionar a lógica para conectar com o backend
      try {
        const response = await fetch('http://localhost:3100/api/usuarios/login',formData);   // Verifica se o login foi bem-sucedido
        if (response.data.token) {
          localStorage.setItem('token', response.data.token); // Armazena o token no localStorage
          navigate('/dashboard'); // Redireciona para o Dashboard
        }
      } catch (err) {
        setError('Email ou senha inválidos. Tente novamente.');
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
        <h2 className="text-center mb-4">Bem-vindo(a)!</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3 position-relative">
            <label htmlFor="password" className="form-label">
              Senha
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              className="form-control"
              placeholder="******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe">
              Lembrar senha
            </label>
          </div>

          <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#89A8B2', border: 'none' }}>
            Login
          </button>
        </form>

        <div className="text-center mt-3">
          <p>
            Ainda não possui uma conta?{' '}
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
