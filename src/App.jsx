import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importa os componentes de roteamento
import BeneficiarioForm from "./components/BeneficiarioForm";
import Login from "./components/login";
import ConsultaCadastro from "./components/consultaBeneficiario";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/beneficiario" element={<BeneficiarioForm />} />
          <Route path="/tela-escolha" element={<telaEscolha />} />

          <Route path="/consulta" element={<ConsultaCadastro/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
