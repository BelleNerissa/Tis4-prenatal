export type UserRegister = {
  nome: string;
  email: string;
  cpf: string;
  password: string;
};

export type UserLogin = {
  cpf: string;
  password: string;
};

export type PersonalDataTypes = {
  id_paciente?: string;
  conhecidoComo: string;
  nomeCompanheiro: string;
  dataNascimento: string;
  idade: number;
  raca: string;
  trabalhaEmCasa: boolean;
  ocupacao: string;
  //TODO: divisao da tabela
  cep: string;
  endereco: string;
  cidade: string;
  estado: string;
  telefoneFixo: string;
  telefoneCelular: string;
};

export type PatientEmergencyTypes = {
  emergFone: string;
  emergKinship: string;
  emergCell: string;
  emergName: string;
};

export type PatientSusTypes = {
  susCardId: string;
  doctorRefName: string;
  NISID: string;
  susChildbirthHospital: string;
  susPreNatalMedicalUnid: string;
};
