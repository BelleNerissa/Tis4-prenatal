import { UserRegister } from "../../../@types/signOff.interface";
import api from "../api";

export const createUser = async (values: UserRegister) => {
  return await api
    .post("auth/registroPaciente", {
      nome: values.nome,
      email: values.email,
      cpf: values.cpf,
      password: values.password,
    })
    .then((response) => {
      console.log("response =>", response);
      const data = {
        data: response.data,
        status: response.status,
      };
      return data;
    });
};
