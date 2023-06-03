import React, { useEffect, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { PersonalDataTypes } from "../../../@types/signOff.interface";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

import { useForm } from "../../../contexts/useForm";
import { useAuth } from "../../../contexts/useAuth";

import { useInitialNavigation } from "../../../hooks/navigation";

import { styles } from "./styles";
import { registerPersonalData } from "../../../services/api/auth/personalData";

export default function PersonalContact() {
  const { updateFormValues, getFormValues } = useForm();
  const { userDataLogin } = useAuth();

  const navigation = useInitialNavigation();

  const [message, setMessage] = useState<string>("");
  const [userData, setUserData] = useState<PersonalDataTypes>(
    {} as PersonalDataTypes
  );
  const [isError, setIsError] = useState<boolean>(false);

  const onSubmit = async () => {
    const newUserData: PersonalDataTypes | undefined = getFormValues();

    if (userData.cep && newUserData !== undefined) {
      const { data, status } = await registerPersonalData(
        { ...newUserData, id_paciente: userDataLogin.user.id },
        userDataLogin.token
      );

      if (status === 200 || status === 201) {
        Alert.alert("Sucesso!", "Atualizações feitas com sucesso.");
        navigation.navigate("PatientSus");
      } else {
        Alert.alert("Erro!", "Dados não atualizados...");
      }
    }
  };

  useEffect(() => {
    updateFormValues(userData);
    console.log("foiii foi");
  }, [userData]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Dados de contato</Text>
          <Text style={styles.subTitle}> Passo 2</Text>
        </View>
        <KeyboardAvoidingView>
          <Input
            text="Cep"
            keyboardType="decimal-pad"
            value={userData.cep}
            onChangeText={(text) => {
              userData.cep = text;
              setUserData({ ...userData });
            }}
            placeholder={"Digite seu cep"}
            maxLength={11}
          />
          <Input
            text="Endereço"
            keyboardType="default"
            value={userData.endereco}
            onChangeText={(text) => {
              userData.endereco = text;
              setUserData({ ...userData });
            }}
            placeholder={"Digite seu endereço"}
            maxLength={11}
          />
          <Input
            text="Cidade"
            keyboardType="default"
            value={userData.cidade}
            onChangeText={(text) => {
              userData.cidade = text;
              setUserData({ ...userData });
            }}
            placeholder={"Digite sua cidade"}
            maxLength={11}
          />
          <Input
            text="Estado"
            keyboardType="default"
            value={userData.estado}
            onChangeText={(text) => {
              userData.estado = text;
              setUserData({ ...userData });
            }}
            placeholder={"Digite seu estado UF"}
            maxLength={13}
          />
          <Input
            text="Telefone Fixo"
            keyboardType="default"
            value={userData.telefoneFixo}
            onChangeText={(text) => {
              userData.telefoneFixo = text;
              setUserData({ ...userData });
            }}
            placeholder={"Digite seu telefone fixo"}
            maxLength={13}
          />
          <Input
            text="Telefone Celular"
            keyboardType="default"
            value={userData.telefoneCelular}
            onChangeText={(text) => {
              userData.telefoneCelular = text;
              setUserData({ ...userData });
            }}
            placeholder={"Digite seu telefone celular"}
            maxLength={20}
          />

          <Button
            onPress={() => {
              updateFormValues(userData);
              onSubmit();
            }}
            title="Próximo"
          />
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
}
