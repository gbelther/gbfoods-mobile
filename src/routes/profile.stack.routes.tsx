import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { Profile } from "../screens/Profile";
import { ProfileEdit } from "../screens/ProfileEdit";

const { Navigator, Screen } = createStackNavigator();

export function ProfileStackRoutes() {
  return (
    <Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Profile" component={Profile} />
      <Screen name="ProfileEdit" component={ProfileEdit} />
    </Navigator>
  );
}
