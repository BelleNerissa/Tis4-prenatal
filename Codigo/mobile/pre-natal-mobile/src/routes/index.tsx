import React from "react";
//import AppTabsRoutes from "./app/app.tabs.routes";

import { InitialRoutes } from "./auth/auth.initial.routes";

import { useAuth } from "../contexts/useAuth";
import AppTabsRoutes from "./app/app.tabs.routes";

export function Routes() {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <AppTabsRoutes />;
    //TODO: mudar para a rota dentro do app
    return <InitialRoutes />;
  } else {
    return <InitialRoutes />;
  }
}
