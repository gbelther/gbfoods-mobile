import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";

import { AppStackRoutes } from "./app.stack.routes";

import { Profile } from "../screens/Profile";
import { Cart } from "../screens/Cart";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.main,
        tabBarInactiveTintColor: theme.colors.disabled,
        tabBarStyle: {
          height: 50,
          backgroundColor: theme.colors.background_inverted,
          borderTopColor: theme.colors.main,
          borderTopWidth: 2,
        },
      }}
    >
      <Screen
        name="Home"
        component={AppStackRoutes}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="local-dining" size={32} color={color} />
          ),
        }}
      />
      <Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="shopping-cart" size={32} color={color} />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="account-circle" size={32} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
