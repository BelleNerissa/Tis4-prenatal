import React, { useState } from "react";
import { Text, View, KeyboardAvoidingView, Alert } from "react-native";

import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { useInitialNavigation } from "../../../hooks/navigation";

import { useAuth } from "../../../contexts/useAuth";

import { authUser } from "../../../services/api/auth/signIn";

import { styles } from "./styles";
import TextApp from "../../../components/Text";
import theme from "../../../utils/theme";

import { UserLogin } from "../../../@types/signOff.interface";

export default function SignIn() {
  // const { setUser, userData } = userHook();
  const { setUserDataLogin, login } = useAuth();

  const navigation = useInitialNavigation();

  const [message, setMessage] = useState<string>("");
  const [userLogin, setUserLogin] = useState<UserLogin>({} as UserLogin);
  const [isError, setIsError] = useState<boolean>(false);

  const onSubmit = async () => {
    handleLogin(userLogin);
  };

  const handleLogin = async (values: UserLogin) => {
    try {
      let response = await authUser(values);
      if (response.status === 200 || response.status === 201) {
        console.log("response no index ====>", response);
        setUserDataLogin(response.data);
        alert("Login realizado com sucesso!");
        login();
        //navigation.navigate("PersonalData");
      } else {
        setIsError(true);
        alert("Erro durante processo de login, tente novamente!");
      }
    } catch (erro) {
      console.log("error = ", erro);
      setIsError(true);
      alert("Credenciais não encontradas!");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Entrar</Text>
        </View>
        {isError && (
          <TextApp text={message} size={16} color={theme.colors.red} />
        )}
        <KeyboardAvoidingView style={{ paddingTop: 8 }}>
          <Input
            text="CPF"
            keyboardType="decimal-pad"
            value={userLogin.cpf}
            onChangeText={(text) => {
              userLogin.cpf = text;
              setUserLogin({ ...userLogin });
            }}
            placeholder={"Digite seu CPF"}
            maxLength={11}
          />
          <Input
            text="Senha"
            value={userLogin.password}
            onChangeText={(text) => {
              userLogin.password = text;
              setUserLogin({ ...userLogin });
            }}
            placeholder={"Digite sua senha"}
            password={true}
          />
          <View style={{ paddingBottom: 16, alignSelf: "flex-end" }}>
            <TextApp
              text="Esqueci minha senha"
              size={16}
              color={theme.colors.primary}
              onPress={() => navigation.navigate("ForgotPassword")}
            />
          </View>
          <Button onPress={() => onSubmit()} title="Entrar" />
        </KeyboardAvoidingView>
        <View style={{ paddingTop: 24, flexDirection: "row" }}>
          <TextApp
            text="Não possui conta?"
            size={16}
            color={theme.colors.text}
          />
          <View style={{ paddingHorizontal: 8 }}>
            <TextApp
              text="Crie uma!"
              size={16}
              color={theme.colors.primary}
              onPress={() => navigation.navigate("SignUp")}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
