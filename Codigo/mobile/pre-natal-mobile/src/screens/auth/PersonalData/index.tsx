import React, { useState } from "react";
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
import { useInitialNavigation } from "../../../hooks/navigation";

import { styles } from "./styles";

export default function PersonalData() {
  const { updateFormValues } = useForm();

  const navigation = useInitialNavigation();

  const [message, setMessage] = useState<string>("");
  const [userData, setUserData] = useState<PersonalDataTypes>(
    {} as PersonalDataTypes
  );
  const [isError, setIsError] = useState<boolean>(false);

  const [isWorkingFromHome, setIsWorkingFromHome] = useState(false);

  const handleSwitchToggle = () => {
    setIsWorkingFromHome(!isWorkingFromHome);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Dados Pessoais</Text>
          <Text style={styles.subTitle}> Passo 1</Text>
        </View>
        <KeyboardAvoidingView>
          <Input
            text="Conhecido como"
            keyboardType="default"
            value={userData.conhecidoComo}
            onChangeText={(text) => {
              userData.conhecidoComo = text;
              setUserData({ ...userData });
            }}
            placeholder={"Digite seu nome social ou apelido"}
            maxLength={11}
          />
          <Input
            text="Nome do companheiro"
            keyboardType="default"
            value={userData.nomeCompanheiro}
            onChangeText={(text) => {
              userData.nomeCompanheiro = text;
              setUserData({ ...userData });
            }}
            placeholder={"Digite o nome do seu companheiro"}
            maxLength={11}
          />
          <Input
            text="Data de nascimento"
            keyboardType="decimal-pad"
            value={userData.dataNascimento}
            onChangeText={(text) => {
              userData.dataNascimento = text;
              setUserData({ ...userData });
            }}
            placeholder={"Digite sua data de nascimento"}
            maxLength={11}
          />
          <Input
            text="Idade"
            keyboardType="decimal-pad"
            value={userData.idade}
            onChangeText={(text) => {
              userData.idade = text;
              setUserData({ ...userData });
            }}
            placeholder={"Digite seu nome"}
            maxLength={2}
          />
          <Input
            text="Raça"
            keyboardType="default"
            value={userData.raca}
            onChangeText={(text) => {
              userData.raca = text;
              setUserData({ ...userData });
            }}
            placeholder={"Digite seu nome"}
            maxLength={11}
          />
          <Input
            text="Trabalha em casa"
            keyboardType="default"
            value={userData.trabalhaEmCasa}
            onChangeText={(text) => {
              userData.trabalhaEmCasa = text;
              setUserData({ ...userData });
            }}
            placeholder={""}
            maxLength={11}
          />
          <Input
            text="Ocupação"
            keyboardType="default"
            value={userData.ocupacao}
            onChangeText={(text) => {
              userData.ocupacao = text;
              setUserData({ ...userData });
            }}
            placeholder={"Digite seu nome"}
            maxLength={11}
          />

          <Button
            onPress={() => {
              updateFormValues(userData);
              navigation.navigate("PersonalContact");
            }}
            title="Próximo"
          />
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
}
