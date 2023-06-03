import React from "react";
import { TouchableOpacity, View } from "react-native";

import theme from "../../utils/theme";
import TextApp from "../Text";
import { styles } from "./styles";
import { ItemListProps } from "../../@types/app.list";

//import { useHomeNavigation } from "../../hooks/navigation";

type CardProps = {
  item: ItemListProps;
};

export default function Card({ item }: CardProps) {
  //const navigation = useHomeNavigation();

  return (
    //TODO: fazer a navegação com a propriedade link para as telas
    <TouchableOpacity style={styles.container} onPress={() => {}} key={item.id}>
      <View style={styles.textBox}>
        <TextApp
          size={theme.fonts.subTitle}
          text={item.title}
          isBold
          fontWeight="500"
          color={theme.colors.secundary}
        />
      </View>
    </TouchableOpacity>
  );
}
