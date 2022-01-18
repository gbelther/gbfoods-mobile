import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { Splash } from "../screens/Splash";

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Splash"
    >
      <Screen name="Splash" component={Splash} />
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
    </Navigator>
  );
}
