import { PatientEmergencyTypes } from "../../../@types/signOff.interface";
import api from "../api";


export const registerPatientEmergency = async (values: PatientEmergencyTypes) => {
    return await api
      .post("/auth/paciente/registroDadosEmerg", {
        emergFone: values.emergFone,
        emergKinship: values.emergKinship,
        emergCell: values.emergCell,
        emergName: values.emergName
      })
      .then((response) => {
        const data = {
          data: response.data,
          status: response.status,
        };
        return data;
      });
};

export const updatePatientEmergency = async (values: PatientEmergencyTypes) => {
    return await api
      .put("//auth/paciente/atualizaDadosEmerg", {
        emergFone: values.emergFone,
        emergKinship: values.emergKinship,
        emergCell: values.emergCell,
        emergName: values.emergName
      })
      .then((response) => {
        const data = {
          data: response.data,
          status: response.status,
        };
        return data;
      });
};

export const getByIdPatientEmergency = async (values: PatientEmergencyTypes) => {
    return await api
      .post("/auth/paciente/dadosEmerg", {
        emergFone: values.emergFone,
        emergKinship: values.emergKinship,
        emergCell: values.emergCell,
        emergName: values.emergName
      })
      .then((response) => {
        const data = {
          data: response.data,
          status: response.status,
        };
        return data;
      });
};