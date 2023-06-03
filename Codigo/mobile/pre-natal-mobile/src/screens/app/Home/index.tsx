import React from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";

import Header from "../../../components/Header";

import theme from "../../../utils/theme";

import { useHomeNavigation } from "../../../hooks/navigation";
import { styles } from "./styles";
import TextApp from "../../../components/Text";
import { ItemListProps } from "../../../@types/app.list";
import Card from "../../../components/Card";

export default function Home() {
  const navigation = useHomeNavigation();

  function renderVertical(item: ItemListProps) {
    return <Card item={item} />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.primary }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.boxText}>
          <TextApp
            size={theme.fonts.title}
            text="Mais informações"
            color={theme.colors.secundary}
          />
        </View>
        <View style={styles.boxCard}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.card}>
              <Text style={styles.text}>Exames</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <Text style={styles.text}>Consultas</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.card}>
              <Text style={styles.text}>Vacinas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <Text style={styles.text}>Meu Pré-natal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
