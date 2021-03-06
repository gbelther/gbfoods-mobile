import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { ProfileEdit } from "../screens/ProfileEdit";

const { Navigator, Screen } = createStackNavigator();

export function AppStackRoutes() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="ProfileEdit" component={ProfileEdit} />
    </Navigator>
  );
}
