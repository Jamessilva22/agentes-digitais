import { useState } from "react";
import BeneficiarioController from "../controller/BeneficiarioController";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Button,
  Grid,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

const BeneficiarioForm = () => {
  const [beneficiarios, setBeneficiarios] = useState([]);
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    nomeSocial: "",
    cpf: "",
    nisPis: "",
    dataNascimento: "",
    sexo: "",
    genero: "",
    carteiraIdentidade: "",
    orgaoExpedidor: "",
    uf: "",
    nacionalidade: "",
    possuiDeficiencia: false,
    descricaoDeficiencia: "",
    documentacaoNecessaria: false,
    nomeMae: "",
    nomePai: "",
    profissao: "",
    rendaFamiliar: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleAddBeneficiario = () => {
    setBeneficiarios([...beneficiarios, formData]);
    setFormData({
      nomeCompleto: "",
      nomeSocial: "",
      cpf: "",
      nisPis: "",
      dataNascimento: "",
      sexo: "",
      genero: "",
      carteiraIdentidade: "",
      orgaoExpedidor: "",
      uf: "",
      nacionalidade: "",
      possuiDeficiencia: false,
      descricaoDeficiencia: "",
      documentacaoNecessaria: false,
      nomeMae: "",
      nomePai: "",
      profissao: "",
      rendaFamiliar: "",
    });
  };

  const handleSubmit = async () => {
    const payload = { beneficiario: beneficiarios };
    await BeneficiarioController.submitBeneficiarios(payload);
  };

  return (
    <div>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">Dados Pessoais</Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Nome Completo"
              name="nomeCompleto"
              placeholder="Nome Completo"
              value={formData.nomeCompleto}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              label="CPF"
              name="cpf"
              placeholder="CPF"
              value={formData.cpf}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Nome Social (se houver)"
              name="nomeSocial"
              placeholder="Nome Social"
              value={formData.nomeSocial}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="NIS/PIS"
              name="nisPis"
              placeholder="NIS/PIS"
              value={formData.nisPis}
              onChange={handleChange}
              inputProps={{ maxLength: 15 }}
            />
          </Grid>

          <Grid item xs={12} sm={2}>
            <TextField
              fullWidth
              label="Data de Nascimento"
              type="date"
              name="dataNascimento"
              InputLabelProps={{ shrink: true }}
              value={formData.dataNascimento}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item xs={12} sm={2}>
            <FormControl fullWidth>
              <InputLabel>Identidade de Gênero</InputLabel>
              <Select
                name="sexo"
                value={formData.sexo}
                onChange={handleChange}
                required
              >
                <MenuItem value="">
                  <em>Selecione</em>
                </MenuItem>
                <MenuItem value="homemCis">Homem cis</MenuItem>
                <MenuItem value="mulherCis">Mulher cis</MenuItem>
                <MenuItem value="homemTrans">Homem trans</MenuItem>
                <MenuItem value="mulherTrans">Mulher trans</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Carteira de Identidade"
              name="carteiraIdentidade"
              placeholder="Carteira de Identidade"
              value={formData.carteiraIdentidade}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={1}>
            <TextField
              fullWidth
              label="Órgão Expedidor"
              name="orgaoExpedidor"
              placeholder="Órgão Expedidor"
              value={formData.orgaoExpedidor}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={1}>
            <TextField
              fullWidth
              label="UF"
              name="uf"
              placeholder="UF"
              value={formData.uf}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={2}>
            <TextField
              fullWidth
              label="Nacionalidade"
              name="nacionalidade"
              placeholder="Nacionalidade"
              value={formData.nacionalidade}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  name="possuiDeficiencia"
                  checked={formData.possuiDeficiencia}
                  onChange={handleChange}
                />
              }
              label="Possui Deficiência?"
            />
          </Grid>

          {formData.possuiDeficiencia && (
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="Descrição da Deficiência"
                name="descricaoDeficiencia"
                placeholder="Descrição da Deficiência"
                value={formData.descricaoDeficiencia}
                onChange={handleChange}
              />
            </Grid>
          )}

          <Grid item xs={12} sm={4}>
            <Grid item xs={12}>
              <Typography variant="h6">Filiação</Typography>
            </Grid>
            <TextField
              fullWidth
              label="Nome Completo da Mãe"
              name="nomeMae"
              placeholder="Nome Completo da Mãe"
              value={formData.nomeMae}
              onChange={handleChange}
              required
            />
            <Grid>
              <TextField
                fullWidth
                label="Nome Completo do Pai"
                name="nomePai"
                placeholder="Nome Completo do Pai"
                value={formData.nomePai}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Grid item xs={12}>
              <Typography variant="h6">Renda Familiar</Typography>
            </Grid>
            <TextField
              fullWidth
              label="Renda Familiar"
              name="rendaFamiliar"
              placeholder="Renda Familiar"
              value={formData.rendaFamiliar}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Profissão/Ocupação"
              name="profissao"
              placeholder="Profissão/Ocupação"
              value={formData.profissao}
              onChange={handleChange}
            />
            <Grid>
              <TextField
                fullWidth
                label="RG"
                name="RG"
                placeholder="Insira o RG"
                value={formData.profissao}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddBeneficiario}
            >
              Adicionar Beneficiário
            </Button>
          </Grid>
        </Grid>
      </form>

      <div>
        <Typography variant="h6">Beneficiários Adicionados:</Typography>
        <ul>
          {beneficiarios.map((b, index) => (
            <li key={index}>{b.nomeCompleto}</li>
          ))}
        </ul>
      </div>

      <Button variant="contained" color="secondary" onClick={handleSubmit}>
        Gerar Documento
      </Button>
    </div>
  );
};

export default BeneficiarioForm;
