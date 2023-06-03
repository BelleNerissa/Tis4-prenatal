import { StyleSheet, Dimensions } from "react-native";

import theme from "../../../utils/theme";
const { height, width } = Dimensions.get("window");
export const style = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: theme.colors.shape,
  },
  underlineProfile: {
    alignItems: "center",
    borderBottomWidth: 0.5,
    width: "80%",
  },
  underlineButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 30,

    width: "100%",
  },
  bodyProfile: {
    alignItems: "center",
    height: "50%",
  },
  menuProfile: {
    height: "100%",
    width: width * 0.8,
    paddingTop: 20,
    marginHorizontal: 20,
  },
});
