import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { PatientEmergencyTypes } from "../../../@types/signOff.interface";

import Button from "../../../components/Button";
import Input from "../../../components/Input";

import { useForm } from "../../../contexts/useForm";
import { useInitialNavigation } from "../../../hooks/navigation";

import { styles } from "./styles";

export default function PatientEmergency() {
  const { updateFormValues } = useForm();

  const navigation = useInitialNavigation();

  const [message, setMessage] = useState<string>("");
  const [userData, setUserData] = useState<PatientEmergencyTypes>(
    {} as PatientEmergencyTypes
  );
  const [isError, setIsError] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Emergência</Text>
          <Text style={styles.subTitle}>
            Por favor, forneça os dados do seu contato de emergência abaixo.
          </Text>
        </View>
        <KeyboardAvoidingView>
          <Input
            text="Nome"
            keyboardType="default"
            value={userData.emergName}
            onChangeText={(text) => {
              userData.emergName = text;
              setUserData({ ...userData });
            }}
            placeholder={"Digite o nome do seu contato"}
            maxLength={11}
          />
          <Input
            text="Parentesco"
            keyboardType="default"
            value={userData.emergKinship}
            onChangeText={(text) => {
              userData.emergKinship = text;
              setUserData({ ...userData });
            }}
            placeholder={"Esposo, irmão, mãe..."}
            maxLength={11}
          />
          <Input
            text="Celular de emergência"
            keyboardType="default"
            value={userData.emergFone}
            onChangeText={(text) => {
              userData.emergFone = text;
              setUserData({ ...userData });
            }}
            placeholder={"Digite seu contato de emergência"}
            maxLength={11}
          />
          <Input
            text="Telefone de emergência"
            keyboardType="default"
            value={userData.emergCell}
            onChangeText={(text) => {
              userData.emergCell = text;
              setUserData({ ...userData });
            }}
            placeholder={"Digite seu contato de emergência"}
            maxLength={11}
          />

          <Button
            onPress={() => {
              //TODO: função do envio do form

              navigation.navigate("PatientSus");
            }}
            title="Próximo"
          />
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}
