import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  Box,
  Grid,
} from "@mui/material";

const FormularioImovel = () => {
  const [tipoContrato, setTipoContrato] = useState("");
  const [tipoOcupacao, setTipoOcupacao] = useState("");
  const [outroContrato, setOutroContrato] = useState("");
  const [tempoResidencial, setTempoResidencial] = useState("");

  const handleContratoChange = (event) => {
    setTipoContrato(event.target.value);
    if (event.target.value !== "outros") {
      setOutroContrato("");
    }
  };

  return (
    <Box sx={{ maxWidth: 600, margin: "0 auto", padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Forma de aquisição
      </Typography>
      <FormControl sx={{ width: "66%" }} fullWidth margin="normal">
        <InputLabel>Selecione</InputLabel>
        <Select xs={4} value={tipoContrato} onChange={handleContratoChange}>
          <MenuItem value="contrato_promessa_compra_venda">
            Contrato de promessa de compra e venda
          </MenuItem>
          <MenuItem value="escritura_publica_compra_venda">
            Escritura pública de compra e venda
          </MenuItem>
          <MenuItem value="heranca">Herança</MenuItem>
          <MenuItem value="contrato_particular">Contrato particular</MenuItem>
          <MenuItem value="outros">Outros</MenuItem>
        </Select>
      </FormControl>
      {tipoContrato === "outros" && (
        <TextField
          label="Descreva o tipo de contrato"
          value={outroContrato}
          onChange={(e) => setOutroContrato(e.target.value)}
          fullWidth
          margin="normal"
        />
      )}
      <Typography variant="h6" gutterBottom>
        Dados do Imóvel
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <TextField label="Endereço" fullWidth />
        </Grid>
        <Grid item xs={8}>
          <TextField label="Complemento" fullWidth />
        </Grid>
        <Grid item xs={8}>
          <TextField label="Bairro" fullWidth />
        </Grid>
        <Grid item xs={8}>
          <TextField label="Cidade" fullWidth />
        </Grid>
        <Grid item xs={8}>
          <TextField label="CEP" fullWidth />
        </Grid>
        <Grid item xs={8}>
          <TextField label="Ponto de Referência" fullWidth />
        </Grid>
        <Grid item xs={8}>
          <FormControl fullWidth>
            <InputLabel>Tipo de Ocupação</InputLabel>
            <Select
              value={tipoOcupacao}
              onChange={(e) => setTipoOcupacao(e.target.value)}
            >
              <MenuItem value="proprietario">Proprietário</MenuItem>
              <MenuItem value="inquilino">Inquilino</MenuItem>
              <MenuItem value="herdeiro">Herdeiro</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={8}>
          <TextField
            label="Tempo Residencial no Imóvel"
            value={tempoResidencial}
            onChange={(e) => setTempoResidencial(e.target.value)}
            fullWidth
          />
        </Grid>
      </Grid>

      <Typography variant="h6">Informações sobre o Beneficiario:</Typography>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <TextField label="Nome completo" />
        </Grid>
        <Grid item xs={8}>
          <TextField label='NIS/PIS' />
        </Grid>
        <Grid item xs={8}>
          <TextField label=''/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FormularioImovel;
