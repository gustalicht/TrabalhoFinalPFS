import React, { useEffect, useState } from "react";
import axios from "axios";

function ContasList() {
  const [contas, setContas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:3000/api/contas", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setContas(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Listagem de Contas</h2>
      <ul>
        {contas.map((conta) => (
          <li key={conta.ID}>{conta.Nome} - Saldo: R${conta.Saldo}</li>
        ))}
      </ul>
    </div>
  );
}

export default ContasList;
