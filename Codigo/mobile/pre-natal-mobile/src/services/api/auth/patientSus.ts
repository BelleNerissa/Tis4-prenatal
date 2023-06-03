import { PatientSusTypes } from "../../../@types/signOff.interface";
import api from "../api";

export const registerPatientSus = async (values: PatientSusTypes) => {
    return await api
      .post("/auth/paciente/registroDadosSus", {
        susCardId: values.susCardId,
        doctorRefName: values.doctorRefName,
        NISID: values.NISID,
        susChildbirthHospital: values.susChildbirthHospital,
        susPreNatalMedicalUnid: values.susPreNatalMedicalUnid
      })
      .then((response) => {
        const data = {
          data: response.data,
          status: response.status,
        };
        return data;
      });
};

export const updatePatientSus = async (values: PatientSusTypes) => {
    return await api
      .put("/auth/paciente/atualizaDadosSus", {
        susCardId: values.susCardId,
        doctorRefName: values.doctorRefName,
        NISID: values.NISID,
        susChildbirthHospital: values.susChildbirthHospital,
        susPreNatalMedicalUnid: values.susPreNatalMedicalUnid
      })
      .then((response) => {
        const data = {
          data: response.data,
          status: response.status,
        };
        return data;
      });
};

export const getPatientSus = async (id: String) => {
    return await api
      .get("/auth/paciente/atualizaDadosSus", {})
      .then((response) => {
        const data = {
          data: response.data,
          status: response.status,
        };
        return data;
      });
};
