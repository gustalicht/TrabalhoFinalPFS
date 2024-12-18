import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddDespesaPage from "./pages/DespesaPage";
import AddReceitaPage from "./pages/ReceitaPage";
import ContasList from "./pages/ContasList";
import ContasCreate from "./pages/ContasCreate";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contas" element={<ContasList />} />
        <Route path="/contas/create" element={<ContasCreate />} />
        <Route path="/adicionar-receita" element={<AddReceitaPage />} />
        <Route path="/adicionar-despesa" element={<AddDespesaPage />} />
      </Routes>
    </Router>
  );
}

export default App;
