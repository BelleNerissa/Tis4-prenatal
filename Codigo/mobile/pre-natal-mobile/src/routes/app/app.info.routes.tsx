import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { InfoRoutesParams } from "../routes";

import Info from "../../screens/app/Info";

const { Navigator, Screen } = createStackNavigator<InfoRoutesParams>();

export function InfoRoutes() {
  return (
    <Navigator
      initialRouteName={"Info"}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Info" component={Info} />
    </Navigator>
  );
}
