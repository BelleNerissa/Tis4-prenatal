import { StyleSheet, Dimensions } from "react-native";

import theme from "../../../utils/theme";
const { height, width } = Dimensions.get("window");
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.shape,
  },
  header: {
    padding: 20,
  },
  content: {
    flex: 1,

    paddingTop: 40,
    padding: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: theme.colors.shape,
  },
  title: {
    color: theme.colors.primary,
    fontSize: 34,
    fontWeight: "600",
  },
  subTitle: {
    color: theme.colors.gray_400,
    fontSize: 16,
    fontWeight: "400",
  },
});
