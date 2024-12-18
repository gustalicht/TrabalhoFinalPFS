import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ContasCreate() {
  const [nome, setNome] = useState("");
  const [saldo, setSaldo] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    await axios.post(
      "http://localhost:3000/api/contas",
      { nome, saldo },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    navigate("/contas");
  };

  return (
    <div>
      <h2>Criar Conta</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome da Conta" value={nome} onChange={(e) => setNome(e.target.value)} />
        <input type="number" placeholder="Saldo Inicial" value={saldo} onChange={(e) => setSaldo(e.target.value)} />
        <button type="submit">Criar</button>
      </form>
    </div>
  );
}

export default ContasCreate;
