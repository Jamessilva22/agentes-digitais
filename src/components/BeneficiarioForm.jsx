import React, { useState } from "react";
import { DefaultMenu } from "./defaultMenu.jsx";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  Box,
  Grid2,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

const initialDadosConjuge = {
  nome: "",
  nomeSocial: "",
  nisPis: "",
  cpf: "",
  dataNascimento: "",
  identidadeGenero: "",
  carteiraIdentidade: "",
  orgaoExpedidor: "",
  uf: "",
  nacionalidade: "",
  nomePai: "",
  nomeMae: "",
  telefone: "",
  ocupacaoProfissional: "",
  deficienciaDescricao: "",
};

const FormularioImovel = () => {
  const [tipoContrato, setTipoContrato] = useState("");
  const [tipoOcupacao, setTipoOcupacao] = useState("");
  const [outroContrato, setOutroContrato] = useState("");
  const [tempoResidencial, setTempoResidencial] = useState("");
  const [estadoCivil, setEstadoCivil] = useState("");
  const [deficiencia, setDeficiencia] = useState(false);
  const [dadosConjuge, setDadosConjuge] = useState(initialDadosConjuge);

  const handleInputChange = (setter) => (event) => setter(event.target.value);
  const handleCheckboxChange = (setter) => (event) => setter(event.target.checked);
  const handleObjectChange = (setState) => (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const renderTextField = (label, value, onChange, name = "", fullWidth = true) => (
    <TextField label={label} value={value} onChange={onChange} name={name} fullWidth={fullWidth} margin="normal" />
  );

  const renderSelect = (label, value, onChange, options) => (
    <FormControl fullWidth margin="normal">
      <InputLabel>{label}</InputLabel>
      <Select value={value} onChange={onChange}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );

  return (
    <Box sx={{ maxWidth: 900, margin: "0 auto", padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Forma de aquisição
      </Typography>

      <Grid2 container spacing={0.5}>
        <Grid2 item xs={12} size={6}>
          {renderSelect("Selecione", tipoContrato, handleInputChange(setTipoContrato), [
            { value: "contrato_promessa_compra_venda", label: "Contrato de promessa de compra e venda" },
            { value: "escritura_publica_compra_venda", label: "Escritura pública de compra e venda" },
            { value: "heranca", label: "Herança" },
            { value: "contrato_particular", label: "Contrato particular" },
            { value: "outros", label: "Outros" },
          ])}
        </Grid2>

        {tipoContrato === "outros" && (
          <Grid2 item xs={12} sm={6}>
            {renderTextField("Descreva o tipo de contrato", outroContrato, handleInputChange(setOutroContrato))}
          </Grid2>
        )}

        <Grid2 item xs={12} size={3}>
          {renderSelect("Tipo de Ocupação", tipoOcupacao, handleInputChange(setTipoOcupacao), [
            { value: "proprietario", label: "Proprietário" },
            { value: "inquilino", label: "Inquilino" },
            { value: "herdeiro", label: "Herdeiro" },
          ])}
        </Grid2>

        <Grid2 item xs={12} sm={6}>
          {renderTextField("Tempo Residencial no Imóvel", tempoResidencial, handleInputChange(setTempoResidencial))}
        </Grid2>
      </Grid2>

      <Typography variant="h6" gutterBottom>
        Dados do Imóvel
      </Typography>
      <Grid2 container spacing={0.5}>
        {["Endereço", "Complemento", "Bairro", "Cidade", "CEP", "Ponto de Referência", "localidade", "Quadra", "Lote", "Edificação"].map((label) => (
          <Grid2 item xs={12} sm={6} key={label}>
            {renderTextField(label, "")}
          </Grid2>
        ))}
      </Grid2>

      <Typography variant="h6">Informações sobre o Beneficiário:</Typography>
      <Grid2 container spacing={0.5}>
        {["Nome completo", "Nome social (se houver)"].map((label) => (
          <Grid2 item xs={12} sm={6} key={label}>
            {renderTextField(label, "")}
          </Grid2>
        ))}
        {["CPF", "NIS/PIS", "Carteira de identidade", "Órgão expedidor", "UF", "Nacionalidade"].map((label) => (
          <Grid2 item xs={12} sm={6} key={label}>
            {renderTextField(label, "")}
          </Grid2>
        ))}
        <Grid2 item xs={12} size={3}>
          {renderSelect("Identidade de gênero", "", handleInputChange(() => {}), [
            { value: "masculino", label: "Masculino" },
            { value: "feminino", label: "Feminino" },
            { value: "naoBinario", label: "Não binário" },
          ])}
        </Grid2>
      </Grid2>

      <Typography variant="h6" gutterBottom>
        Filiação
      </Typography>
      <Grid2 container spacing={0.5}>
        {["Nome da mãe","Nome do pai"].map(
          (label) => (
            <Grid2 item xs={12} sm={6} key={label}>
              {renderTextField(label, "")}
            </Grid2>
          )
        )}
      </Grid2>
      <Typography variant="h6" gutterBottom>
        Contato
      </Typography>
      <Grid2 container spacing={0.5}>
        {["Email", "Telefone (01)", "Responsável", "Parentesco", "Telefone (02)", "Responsável", "Parentesco", "Ocupação profissional"].map(
          (label) => (
            <Grid2 item xs={12} sm={6} key={label}>
              {renderTextField(label, "")}
            </Grid2>
          )
        )}
        <Grid2 item xs={12} size={3}>
          {renderSelect("Estado Civil", estadoCivil, handleInputChange(setEstadoCivil), [
            { value: "solteiro", label: "Solteiro(a)" },
            { value: "casado", label: "Casado(a)" },
            { value: "viuvo", label: "Viúvo(a)" },
          ])}
        </Grid2>
      </Grid2>

      <Grid2 container spacing={0.5}>
        
      </Grid2>

      {estadoCivil === "casado" && (
        <>
          <Typography variant="h6" gutterBottom>
            Dados do Cônjuge
          </Typography>
          <Grid2 container spacing={0.5} size={4}>
            {renderSelect("Regime de casamento", "", handleInputChange(() => {}), [
              { value: "comunhaoTotalBens", label: "Comunhão total de bens" },
              { value: "comunhaoParcialBens", label: "Comunhão parcial de bens" },
              { value: "separacaoBens", label: "Separação de bens" },
            ])}
            {[
              "Nome completo",
              "Nome social (se houver)",
              "NIS/PIS",
              "CPF",
              "Data de nascimento",
              "Carteira de identidade",
              "Órgão expedidor",
              "UF",
              "Nacionalidade",
              "Nome do pai",
              "Nome da mãe",
              "Telefone",
              "Ocupação profissional",
            ].map((label) => (
              <Grid2 item xs={12} sm={6} key={label}>
                {renderTextField(label, dadosConjuge[label.toLowerCase()], handleObjectChange(setDadosConjuge), label.toLowerCase())}
              </Grid2>
            ))}

            <Grid2 item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox checked={deficiencia} onChange={handleCheckboxChange(setDeficiencia)} name="deficiencia" />
                }
                label="Possui deficiência?"
              />
            </Grid2>
            {deficiencia && (
              <Grid2 item xs={12}>
                {renderTextField("Descreva a deficiência", dadosConjuge.deficienciaDescricao, handleObjectChange(setDadosConjuge), "deficienciaDescricao")}
              </Grid2>
            )}
          </Grid2>
        </>
      )}
    </Box>
  );
};

export default FormularioImovel;
