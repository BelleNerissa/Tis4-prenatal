import React, { useState } from "react";
import { KeyboardAvoidingView, Text, View } from "react-native";
import { PatientSusTypes } from "../../../@types/signOff.interface";

import Button from "../../../components/Button";
import Input from "../../../components/Input";

import { useHomeNavigation } from "../../../hooks/navigation";
import { useAuth } from "../../../contexts/useAuth";

import { styles } from "./styles";

export default function PatientSus() {
  const navigation = useHomeNavigation();
  const { login } = useAuth();

  const [message, setMessage] = useState<string>("");
  const [userData, setUserData] = useState<PatientSusTypes>(
    {} as PatientSusTypes
  );
  const [isError, setIsError] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Dados do SUS</Text>
          <Text style={styles.subTitle}> Informe seus dados do SUS</Text>
        </View>
        <KeyboardAvoidingView>
          <Input
            text="Cartão do SUS"
            keyboardType="decimal-pad"
            value={userData.susCardId}
            onChangeText={(text) => {
              userData.susCardId = text;
              setUserData({ ...userData });
            }}
            placeholder={"Digite seu cartão do SUS"}
            maxLength={11}
          />
          <Input
            text="Profissional de saúde de referência"
            keyboardType="default"
            value={userData.doctorRefName}
            onChangeText={(text) => {
              userData.doctorRefName = text;
              setUserData({ ...userData });
            }}
            placeholder={"Digite o nome"}
            maxLength={11}
          />
          <Input
            text="NIS"
            keyboardType="default"
            value={userData.NISID}
            onChangeText={(text) => {
              userData.NISID = text;
              setUserData({ ...userData });
            }}
            placeholder={"Digite o número do NIS"}
            maxLength={11}
          />
          <Input
            text="Serviço de saúde indicado para o parto"
            keyboardType="default"
            value={userData.susChildbirthHospital}
            onChangeText={(text) => {
              userData.susChildbirthHospital = text;
              setUserData({ ...userData });
            }}
            placeholder={"Digite o nome da unidade"}
            maxLength={11}
          />
          <Input
            text="Unidade de saúde do pré-natal"
            keyboardType="decimal-pad"
            value={userData.susPreNatalMedicalUnid}
            onChangeText={(text) => {
              userData.susPreNatalMedicalUnid = text;
              setUserData({ ...userData });
            }}
            placeholder={"Digite seu unidade"}
            maxLength={2}
          />

          <Button
            onPress={() => {
              login();
            }}
            title="Salvar"
          />
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}
