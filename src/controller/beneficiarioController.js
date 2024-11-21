import BeneficiarioService from "../services/BeneficiarioService.js";

const BeneficiarioController = {
  submitBeneficiarios: async (data) => {
    try {
      const response = await BeneficiarioService.sendBeneficiarios(data);
      const file = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
      const fileURL = URL.createObjectURL(file);
      const link = document.createElement('a');
      link.href = fileURL;
      link.download = 'documento.docx';
      link.click();
    } catch (error) {
      console.error("Erro ao enviar beneficiários", error);
    }
  }
};

export default BeneficiarioController;
