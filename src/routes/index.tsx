import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppStackRoutes } from "./app.stack.routes";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../hooks/useAuth";
import { AppTabRoutes } from "./app.tab.routes";

export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user && user.id ? <AppTabRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
