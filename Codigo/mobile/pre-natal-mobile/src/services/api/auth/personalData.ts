import { PersonalDataTypes } from "../../../@types/signOff.interface";
import api from "../api";

export const registerPersonalData = async (
  values: PersonalDataTypes,
  token: string
) => {
  return await api
    .post(
      "/auth/paciente/registroDadosPessoais",
      {
        values,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      console.log(response.data);
      const data = {
        data: response.data,
        status: response.status,
      };
      return data;
    });
};
