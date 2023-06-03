import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";

import theme from "../../../utils/theme";
import { FontAwesome } from "@expo/vector-icons";

import { useAuth } from "../../../contexts/useAuth";
import { useHomeNavigation } from "../../../hooks/navigation";
import { style } from "./styles";
import Header from "../../../components/Header";
import TextApp from "../../../components/Text";

export default function Profile() {
  const navigation = useHomeNavigation();
  const { logout } = useAuth();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.primary }}>
      <View style={style.container}>
        <Header title="Perfil" />
        <View style={style.bodyProfile}>
          <View style={style.menuProfile}>
            <TouchableOpacity onPress={() => logout()}>
              <View style={style.underlineButton}>
                <FontAwesome
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  //@ts-ignore
                  name={"arrow-circle-o-right"}
                  size={24}
                  color={theme.colors.gray_400}
                  style={{ marginRight: 20 }}
                />
                <TextApp
                  text="sair"
                  size={theme.fonts.title}
                  color={theme.colors.gray_400}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
