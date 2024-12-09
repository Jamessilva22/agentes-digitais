import React, { useState, useEffect } from "react";
import {
  TextField,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Grid2,
  Grid,
} from "@mui/material";

// Função para carregar o JSON real (usando fetch)
const fetchListaBeneficiarios = async () => {
  const response = await fetch("../../public/listBen.json");
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Erro ao carregar os dados.");
  }
};

const ConsultaCadastro = () => {
  const [listaBeneficiarios, setListaBeneficiarios] = useState([]);
  const [filtroFase, setFiltroFase] = useState("");
  const [filtroArea, setFiltroArea] = useState("");
  const [pendencias, setPendencias] = useState(null); // null = sem filtro, true = com pendências, false = sem pendências
  const [buscaNome, setBuscaNome] = useState("");

  // Carrega os dados assim que o componente é montado
  useEffect(() => {
    fetchListaBeneficiarios()
      .then((data) => setListaBeneficiarios(data.beneficiarios))
      .catch((error) => console.error(error));
  }, []);

  // Função para verificar pendências
  const verificaPendencias = (beneficiario) =>
    !beneficiario.cpf || !beneficiario.rg || !beneficiario.certidaoCasamento;

  // Filtra os dados com base nos critérios
  const beneficiariosFiltrados = listaBeneficiarios
    .filter((beneficiario) =>
      filtroFase ? beneficiario.fase === Number(filtroFase) : true
    )

    .filter((beneficiario) =>
      filtroArea ? beneficiario.area === filtroArea : true
    )
    .filter((beneficiario) =>
      pendencias === null
        ? true
        : pendencias
        ? verificaPendencias(beneficiario)
        : !verificaPendencias(beneficiario)
    )
    .filter((beneficiario) =>
      buscaNome
        ? beneficiario.nome.toLowerCase().includes(buscaNome.toLowerCase())
        : true
    );

  return (
    <div>
      <Grid2 container spacing={2} style={{ marginBottom: "20px" }}>
        <Grid2 item xs={12} md={6}>
          <TextField
            select
            label="Filtrar por Fase"
            value={filtroFase}
            onChange={(e) => setFiltroFase(e.target.value)}
            fullWidth
            style={{ minWidth: "200px" }} // Garante largura mínima
          >
            <MenuItem value="">Todas as Fases</MenuItem>
            {[...new Set(listaBeneficiarios.map((item) => item.fase))].map(
              (fase) => (
                <MenuItem key={fase} value={fase}>
                  Fase {fase}
                </MenuItem>
              )
            )}
          </TextField>
        </Grid2>
        <Grid2 item xs={12} md={6}>
          <TextField
            select
            label="Filtrar por Área"
            value={filtroArea}
            onChange={(e) => setFiltroArea(e.target.value)}
            fullWidth
            style={{ minWidth: "200px" }} // Garante largura mínima
          >
            <MenuItem value="">Todas as Áreas</MenuItem>
            {[...new Set(listaBeneficiarios.map((item) => item.area))].map(
              (area) => (
                <MenuItem key={area} value={area}>
                  {area}
                </MenuItem>
              )
            )}
          </TextField>
        </Grid2>
      </Grid2>

      <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
        <Button
          variant={pendencias === true ? "contained" : "outlined"}
          color="secondary"
          onClick={() => setPendencias(true)}
        >
          Com Pendências
        </Button>
        <Button
          variant={pendencias === false ? "contained" : "outlined"}
          color="primary"
          onClick={() => setPendencias(false)}
        >
          Sem Pendências
        </Button>
        <Button
          variant={pendencias === null ? "contained" : "outlined"}
          onClick={() => setPendencias(null)}
        >
          Todos
        </Button>
      </div>
      <Grid2 container spacing={1}>
        <Grid2 item>
          <TextField
            label="Buscar por Nome"
            value={buscaNome}
            onChange={(e) => setBuscaNome(e.target.value)}
            margin="normal"
          />
        </Grid2>
      </Grid2>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Fase</TableCell>
              <TableCell>Estado Civil</TableCell>
              <TableCell>Regime de Casamento</TableCell>
              <TableCell>Cônjuge</TableCell>
              <TableCell>CPF</TableCell>
              <TableCell>RG</TableCell>
              <TableCell>Certidão de Casamento</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {beneficiariosFiltrados.map((beneficiario, index) => (
              <TableRow key={index}>
                <TableCell>{beneficiario.nome}</TableCell>
                <TableCell>{beneficiario.fase}</TableCell>
                <TableCell>{beneficiario.estadoCivil}</TableCell>
                <TableCell>{beneficiario.regimeCasamento}</TableCell>
                <TableCell>{beneficiario.conjuge || "-"}</TableCell>
                <TableCell>{beneficiario.cpf ? "Sim" : "Não"}</TableCell>
                <TableCell>{beneficiario.rg ? "Sim" : "Não"}</TableCell>
                <TableCell>
                  {beneficiario.certidaoCasamento ? "Sim" : "Não"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ConsultaCadastro;
