import React, { useEffect, useState } from 'react';
import { ErrorMessage, Formik, Form, Field } from "formik";
import { dadosPessoaisType } from '../../@types/DadosPessoais';
import { getPersonalDataFunc, postPersonalDataFunc, putPersonalDataFunc } from '../../services/pacients/PersonalData';

const defaultPersonalData = {
    "conhecidoComo": "",
    "nomeCompanheiro": "",
    "dataNascimento": "",
    "idade": 0,
    "raca": "",
    "trabalhaEmCasa": false,
    "ocupacao": "",
    "cep": "",
    "endereco": "",
    "cidade": "",
    "estado": "",
    "telefoneFixo": "",
    "telefoneCelular": "",
}

function PersonalDataCard({ handleHasPersonalData, pacient }) {
    const [personalData, setPersonalData] = useState<dadosPessoaisType>({} as dadosPessoaisType);
    const [isEditing, setIsEditing] = useState(false);
    const [hasPersonalData, setHasPersonalData] = useState(false);
    const [pacientId, setPacientId] = useState(localStorage.getItem('pacient_id') || '')

    useEffect(() => {
        fetchPersonalData(pacient.id);
        setIsEditing(false)
    }, [pacient.id]);

    const fetchPersonalData = async (id_paciente: string) => {
        const response = await getPersonalDataFunc(id_paciente);
        setPersonalData(response);
        if (response) {
            handleHasPersonalData(true);
            setHasPersonalData(true);
        }
        else {
            handleHasPersonalData(false);
            setHasPersonalData(false);
        }
    };

    const handlePostPersonalData = async (values: dadosPessoaisType) => {
        if (pacientId == "") {
            alert("Paciente não encontrada")
        }
        if (hasPersonalData) {
            try {
                let response = await putPersonalDataFunc(pacientId, values);
                if (response.status === 200 || 201) {
                    alert("Usuário atualizado com sucesso!")
                    setIsEditing(false);
                } else {
                    alert("Erro durante processo, tente novamente!");
                }
            } catch (erro) {
                console.log("error = ", erro);
                alert("Credenciais não encontradas!");
            }
        } else {
            try {
                let response = await postPersonalDataFunc(pacientId, values);
                if (response.status === 200 || 201) {
                    alert("Usuário Cadastrado com sucesso!")
                    setIsEditing(false);
                } else {
                    alert("Erro durante processo, tente novamente!");
                }
            } catch (erro) {
                console.log("error = ", erro);
                alert("Credenciais não encontradas!");
            }
        }
    };

    return (
        <div className="relative">
            <h1 className="text-2xl md:text-3xl text-pink-900 font-bold mb-1">Dados Pessoais</h1>
            {
                Object.keys(personalData).length !== 0 ? (
                    <>

                        <Formik
                            initialValues={personalData}
                            enableReinitialize
                            onSubmit={handlePostPersonalData}
                        >
                            <Form className="register-form">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Conhecida como
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="conhecidoComo"
                                            type="text"
                                            id="conhecidoComo"
                                            placeholder="Digite seu nome"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="conhecidoComo"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Nome companheiro
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="nomeCompanheiro"
                                            type="text"
                                            id="nomeCompanheiro"
                                            placeholder="Digite o nome"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="nomeCompanheiro"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Data de nascimento
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="dataNascimento"
                                            type="text"
                                            id="dataNascimento"
                                            placeholder="Digite sua data de nascimento"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="dataNascimento"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Idade
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="idade"
                                            type="number"
                                            id="idade"
                                            placeholder="Digite sua idade"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="idade"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Raça
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="raca"
                                            type="text"
                                            id="raca"
                                            placeholder="Digite sua raça"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="raca"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Trabalha em casa?
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="trabalhaEmCasa"
                                            type="text"
                                            id="trabalhaEmCasa"
                                            placeholder="Sim? Não?"
                                            disabled={!isEditing}
                                            render={({ field }) => (
                                                <input
                                                    {...field}
                                                    value={field.value ? 'Sim' : 'Não'}
                                                    readOnly
                                                />
                                            )}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="trabalhaEmCasa"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Ocupação
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="ocupacao"
                                            type="text"
                                            id="ocupacao"
                                            placeholder="Digite sua ocupação"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="ocupacao"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Cep
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="cep"
                                            type="text"
                                            id="cep"
                                            placeholder="Digite seu cep"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="cep"
                                            className="form-error"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Endereço
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="endereco"
                                            type="text"
                                            id="endereco"
                                            placeholder="Digite seu endereço"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="endereco"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Cidade
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="cidade"
                                            type="text"
                                            id="cidade"
                                            placeholder="Digite sua cidade"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="cidade"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Estado
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="estado"
                                            type="text"
                                            id="estado"
                                            placeholder="Digite seu estado"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="estado"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Telefone Fixo
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="telefoneFixo"
                                            type="text"
                                            id="telefoneFixo"
                                            placeholder="Digite seu telefone fixo"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="telefoneFixo"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Telefone Celular
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="telefoneCelular"
                                            type="text"
                                            id="telefoneCelular"
                                            placeholder="Digite seu telefone celular"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="telefoneCelular"
                                            className="form-error"
                                        />
                                    </div>
                                </div>
                                <div className="text-center mt-6">
                                    <div className="flex flex-row">
                                        <button disabled={isEditing} onClick={() => setIsEditing(true)} className={`text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ${!isEditing ? 'bg-teal-500' : 'bg-gray-500'}`}>
                                            Editar
                                        </button>
                                        <button disabled={!isEditing} type="submit" className={`text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ${!isEditing ? 'bg-gray-500' : 'bg-pink-500'}`}>
                                            Salvar
                                        </button>
                                    </div>
                                </div>
                            </Form>

                        </Formik>

                    </>
                ) : (
                    <>
                        <h1 className="text-2xl md:text-1xl text-teal-300 font-bold mb-1">Essa paciente não tem dados registrados dessa Ficha</h1>
                        <div className="text-center mt-6">
                            <div className="flex flex-row"></div>
                            <button onClick={() => {
                                setIsEditing(true);
                                setPersonalData(defaultPersonalData);
                            }
                            } className='bg-teal-500 hover:bg-pink-500  btn text-white p-2 rounded-sm'>
                                Criar ficha
                            </button>
                        </div>
                    </>
                )
            }
        </div>
    );
}

export default PersonalDataCard;
