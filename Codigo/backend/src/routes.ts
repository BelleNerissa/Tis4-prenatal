import { Router } from "express";
import { ensureAuthenticatePaciente } from "./middlewares/ensureAuthenticatePaciente";
import { ensureAuthenticateMedico } from "./middlewares/ensureAuthenticateMedico";
import { AuthenticateUserController } from "./modules/userPaciente/useCases/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "./modules/userPaciente/useCases/createUser/CreateUserController";
import { RegisterPersonalDataController } from "./modules/userPaciente/useCases/registerPersonalData/RegisterPersonalDataController";
import { AuthenticateUserMedicoController } from "./modules/userMedico/useCases/authenticateUserMedico/AuthenticateUserMedicoController";
import { CreateUserMedicoController } from "./modules/userMedico/useCases/createUserMedico/CreateUserMedicoController";
import { UpdateMedicoController } from "./modules/userMedico/useCases/updateMedico/UpdateMedicoController";
import { GetDadosPessoaisController } from "./modules/userPaciente/useCases/getDadosPessoais/GetDadosPessoaisController";
import { ListPacienteByNameController } from "./modules/userMedico/useCases/listPacienteByName/ListPacienteByNameController";
import { ListAllPacientesController } from "./modules/userMedico/useCases/listAllPacientes/ListAllPacientesController";
import { UpdateDadosPessoaisController } from "./modules/userPaciente/useCases/updateDadosPessoais/UpdateDadosPessoaisController";
import { RegisterSusDataController } from "./modules/userPaciente/useCases/registerSusData/RegisterSusDataController";
import { UpdateSusDataController } from "./modules/userPaciente/useCases/updateSusData/UpdateSusDataController";
import { GetSusDataController } from "./modules/userPaciente/useCases/getSusData/GetSusDataController";
import { RegisterEmergDataController } from "./modules/userPaciente/useCases/registerEmergData/RegisterEmergDataController";
import { UpdateEmergDataController } from "./modules/userPaciente/useCases/updateEmergData/UpdateEmergDataController";
import { GetEmergDataController } from "./modules/userPaciente/useCases/getEmergData/GetEmergDataController";
import { FavoritaPacienteController } from "./modules/userMedico/useCases/favoritaPaciente/FavoritaPacienteController";
import { CadastraFichaDePartoController } from "./modules/userMedico/useCases/cadastraFichaDeParto/CadastraFichaDePartoController";
import { GetFichaDePartoController } from "./modules/userPaciente/useCases/getFichaDeParto/GetFichaDePartoController";
import { GetFichaDePartoDaPacienteController } from "./modules/userMedico/useCases/getFichaDeParto/GetFichaDePartoDaPacienteController";
import { CadastroFichaDeConsultaController } from "./modules/userMedico/useCases/cadastraFichaDeConsulta/CadastraFichaDeConsultaController";
import { GetFichaDeConsultaController } from "./modules/userPaciente/useCases/getFichaDeConsulta/GetFichaDeConsultaController";
import { GetFichaDeConsultaDaPacienteController } from "./modules/userMedico/useCases/getFichaDeConsulta/GetFichaDeConsultaDaPacienteController";
import { RegisterFamilyBackGroundController } from "./modules/userPaciente/useCases/registerFamilyBackGround/RegisterFamilyBackGroundController";
import { UpdateFamilyBackGroundController } from "./modules/userPaciente/useCases/updateFamilyBackGround/UpdateFamilyBackGroundController";
import { GetFamilyBackGroundController } from "./modules/userPaciente/useCases/getFamilyBackGround/GetFamilyBackGroundController";

const routes = Router()

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()
const registerPersonalDataController = new RegisterPersonalDataController()
const createUserMedicoController = new CreateUserMedicoController()
const authenticateUserMedicoController = new AuthenticateUserMedicoController()
const updateMedicoController = new UpdateMedicoController()
const getDadosPessoaisController = new GetDadosPessoaisController()
const listPacienteByNameController = new ListPacienteByNameController()
const listAllPacientesController = new ListAllPacientesController()
const updateDadosPessoaisController = new UpdateDadosPessoaisController()
const registerSusDataController = new RegisterSusDataController()
const updateSusDataController = new UpdateSusDataController()
const getSusDataController = new GetSusDataController()
const registerEmergDataController = new RegisterEmergDataController()
const updateEmergDataController = new UpdateEmergDataController()
const getEmergDataController = new GetEmergDataController()
const favoritaPacienteController = new FavoritaPacienteController()
const cadastraFichaDePartoController = new CadastraFichaDePartoController()
const getFichaDePartoController = new GetFichaDePartoController()
const getFichaDePartoDaPacienteController = new GetFichaDePartoDaPacienteController()
const cadastroFichaDeConsultaController =  new CadastroFichaDeConsultaController()
const getFichaDeConsultaController = new GetFichaDeConsultaController()
const getFichadeConsultaDaPacienteController = new GetFichaDeConsultaDaPacienteController()
const registerFamilyBackGroundController = new RegisterFamilyBackGroundController()
const updateFamilyBackGroundController = new UpdateFamilyBackGroundController()
const getFamilyBackGroundController = new GetFamilyBackGroundController()


routes.post('/auth/registroPaciente', createUserController.handle)
routes.post('/auth/loginPaciente', authenticateUserController.handle)
routes.post('/auth/paciente/registroDadosPessoais', ensureAuthenticatePaciente, registerPersonalDataController.handle)
routes.post('/auth/medico/registroDadosPessoais/:id_paciente', ensureAuthenticateMedico, registerPersonalDataController.handle)
routes.post('/auth/registroMedico', createUserMedicoController.handle)
routes.post('/auth/loginMedico', authenticateUserMedicoController.handle)
routes.put('/auth/medico/atualizaDados', ensureAuthenticateMedico, updateMedicoController.handle)
routes.get('/auth/dadosPessoais/:id_paciente', ensureAuthenticateMedico, getDadosPessoaisController.handle)
routes.get('/auth/listaPaciente', ensureAuthenticateMedico, listPacienteByNameController.handle)
routes.get('/auth/pacientes', ensureAuthenticateMedico, listAllPacientesController.handle)
routes.put('/auth/paciente/atualizaDados/:id_paciente', ensureAuthenticatePaciente, updateDadosPessoaisController.handle)
routes.post('/auth/paciente/registroDadosSus', ensureAuthenticatePaciente, registerSusDataController.handle)
routes.post('/auth/medico/registroDadosSus/:id_paciente', ensureAuthenticateMedico, registerSusDataController.handle)
routes.get('/auth/paciente/dadosSus/:id_paciente', ensureAuthenticatePaciente, getSusDataController.handle)
routes.get('/auth/medico/dadosSus/:id_paciente', ensureAuthenticateMedico, getSusDataController.handle)
routes.put('/auth/paciente/atualizaDadosSus', ensureAuthenticatePaciente, updateSusDataController.handle)
routes.put('/auth/medico/atualizaDadosSus/:id_paciente', ensureAuthenticateMedico, updateSusDataController.handle)
routes.post('/auth/paciente/registroDadosEmerg', ensureAuthenticatePaciente, registerEmergDataController.handle)
routes.post('/auth/medico/registroDadosEmerg/:id_paciente', ensureAuthenticateMedico, registerEmergDataController.handle)
routes.put('/auth/paciente/atualizaDadosEmerg', ensureAuthenticatePaciente, updateEmergDataController.handle)
routes.put('/auth/medico/atualizaDadosEmerg/:id_paciente', ensureAuthenticateMedico, updateEmergDataController.handle)
routes.get('/auth/paciente/dadosEmerg/:id_paciente', ensureAuthenticatePaciente, getEmergDataController.handle)
routes.get('/auth/medico/dadosEmerg/:id_paciente', ensureAuthenticateMedico, getEmergDataController.handle)
routes.post('/auth/medico/favoritaPaciente/:id_paciente', ensureAuthenticateMedico, favoritaPacienteController.handle)
routes.post('/auth/medico/cadastroFichaDeParto/:id_paciente', ensureAuthenticateMedico, cadastraFichaDePartoController.handle)
routes.get('/auth/paciente/fichaDeParto', ensureAuthenticatePaciente, getFichaDePartoController.handle)
routes.get('/auth/medico/fichaDePartoPaciente/:id_paciente', ensureAuthenticateMedico, getFichaDePartoDaPacienteController.handle)
routes.post('/auth/medico/cadastroFichaDeConsulta/:id_paciente', ensureAuthenticateMedico, cadastroFichaDeConsultaController.handle)
routes.get('/auth/paciente/fichaDeConsulta', ensureAuthenticatePaciente, getFichaDeConsultaController.handle)
routes.get('/auth/medico/fichaDeConsulta/:id_paciente', ensureAuthenticateMedico, getFichadeConsultaDaPacienteController.handle)
routes.post('/auth/paciente/registroAntecedentes', ensureAuthenticatePaciente, registerFamilyBackGroundController.handle)
routes.put('/auth/paciente/atualizaAntecedentes', ensureAuthenticatePaciente, updateFamilyBackGroundController.handle)
routes.put('/auth/paciente/antecedentes/:id_paciente', ensureAuthenticatePaciente, getFamilyBackGroundController.handle)

export { routes }