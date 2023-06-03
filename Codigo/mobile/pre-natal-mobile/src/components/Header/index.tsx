import React from "react";
import { View } from "react-native";

import { useAuth } from "../../contexts/useAuth";

import TextApp from "../Text";
import theme from "../../utils/theme";
import { styles } from "./styles";

import { useHomeNavigation } from "../../hooks/navigation";

type HeaderProps = {
  title?: string;
};

export default function Header({ title }: HeaderProps) {
  const { userDataLogin } = useAuth();
  const { colors, fonts } = theme;

  const navigation = useHomeNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <TextApp
          color={colors.shape}
          size={fonts.title}
          text={title || `Olá, ${"test"}.`}
          //text={`Olá, ${userDataLogin.user.nome || "test"}.`}
        />
      </View>
    </View>
  );
}
