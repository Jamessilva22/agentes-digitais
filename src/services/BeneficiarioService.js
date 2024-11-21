import api from "../utils/api.js";

const BeneficiarioService = {
  sendBeneficiarios: (data) => {
    return api.post("http://localhost:3000/api/listagem-complementar", data, {
      responseType: 'blob',
    });
  },
};

export default BeneficiarioService;
