import { useState } from "react";
import BeneficiarioController from "../controller/BeneficiarioController";

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
        <div>
          <label>Nome Completo: </label>
          <input
            type="text"
            name="nomeCompleto"
            placeholder="Nome Completo"
            value={formData.nomeCompleto}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Nome Social: </label>
          <input
            type="text"
            name="nomeSocial"
            placeholder="Nome Social (se houver)"
            value={formData.nomeSocial}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>CPF: </label>
          <input
            type="text"
            name="cpf"
            placeholder="CPF"
            value={formData.cpf}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>NIS/PIS: </label>
          <input
            type="text"
            name="nisPis"
            placeholder="NIS/PIS"
            value={formData.nisPis}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Data de Nascimento: </label>
          <input
            type="date"
            name="dataNascimento"
            value={formData.dataNascimento}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Identidade de gênero: </label>
          <select name="sexo" value={formData.sexo} onChange={handleChange} required>
            <option value="">Selecione</option>
            <option value="homemCis">Homem cis</option>
            <option value="mulherCis">Mulher cis</option>
            <option value="homemTrans">Homem trans</option>
            <option value="mulherTrans">Mulher trans</option>
          </select>
        </div>

        <div>
          <label>Carteira de Identidade: </label>
          <input
            type="text"
            name="carteiraIdentidade"
            placeholder="Carteira de Identidade"
            value={formData.carteiraIdentidade}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Órgão Expedidor: </label>
          <input
            type="text"
            name="orgaoExpedidor"
            placeholder="Órgão Expedidor"
            value={formData.orgaoExpedidor}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>UF: </label>
          <input
            type="text"
            name="uf"
            placeholder="UF"
            value={formData.uf}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Nacionalidade: </label>
          <input
            type="text"
            name="nacionalidade"
            placeholder="Nacionalidade"
            value={formData.nacionalidade}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Possui Deficiência? </label>
          <input
            type="checkbox"
            name="possuiDeficiencia"
            checked={formData.possuiDeficiencia}
            onChange={handleChange}
          />
          {formData.possuiDeficiencia && (
            <div>
              <label>Descreva a Deficiência: </label>
              <input
                type="text"
                name="descricaoDeficiencia"
                placeholder="Descrição da Deficiência"
                value={formData.descricaoDeficiencia}
                onChange={handleChange}
              />
            </div>
          )}
        </div>
        <div>
          <label>Nome Completo da Mãe: </label>
          <input
            type="text"
            name="nomeMae"
            placeholder="Nome Completo da Mãe"
            value={formData.nomeMae}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Nome Completo do Pai: </label>
          <input
            type="text"
            name="nomePai"
            placeholder="Nome Completo do Pai"
            value={formData.nomePai}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Profissão/Ocupação: </label>
          <input
            type="text"
            name="profissao"
            placeholder="Profissão/Ocupação"
            value={formData.profissao}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Renda Familiar: </label>
          <input
            type="text"
            name="rendaFamiliar"
            placeholder="Renda Familiar"
            value={formData.rendaFamiliar}
            onChange={handleChange}
          />
        </div>

        <button type="button" onClick={handleAddBeneficiario}>
          Adicionar Beneficiário
        </button>
      </form>

      <div>
        <h3>Beneficiários Adicionados: </h3>
        <ul>
          {beneficiarios.map((b, index) => (
            <li key={index}>{b.nomeCompleto}</li>
          ))}
        </ul>
      </div>

      <button type="button" onClick={handleSubmit}>
        Gerar Documento
      </button>
    </div>
  );
};

export default BeneficiarioForm;
