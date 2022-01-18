import React, { useEffect } from "react";
import LottieView from "lottie-react-native";

import loadingHamb from "../../assets/loadingHamb.json";

import { Container } from "./styles";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

export function Splash() {
  const navigation = useNavigation() as NavigationProp<ParamListBase>;

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 5000);
  }, []);

  return (
    <Container>
      <LottieView
        source={loadingHamb}
        style={{ height: 200 }}
        resizeMode="contain"
        autoPlay
        loop
      />
    </Container>
  );
}
