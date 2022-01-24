import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Profile } from "../screens/Profile/Profile";
import { AppStackRoutes } from "./app.stack.routes";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
  return (
    <Navigator>
      <Screen name="Home" component={AppStackRoutes} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
}
