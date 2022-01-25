import React from "react";
import { StatusBar } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import { useAuth } from "../../hooks/useAuth";

import * as Sty from "./styles";

export function Profile() {
  const theme = useTheme();
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <Sty.Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Sty.LogoutWrapper>
        <Sty.LogoutButton onPress={handleLogout}>
          <MaterialIcons
            name="exit-to-app"
            size={40}
            color={theme.colors.text}
          />
        </Sty.LogoutButton>
      </Sty.LogoutWrapper>

      <Sty.ProfileWrapper>
        <Sty.AvatarWrapper>
          <Sty.Avatar source={{ uri: "https://github.com/gbelther.png" }} />
        </Sty.AvatarWrapper>
        <Sty.Options>
          <Sty.Option onPress={() => console.log("Click")}>
            <Sty.OptionText>Editar Perfil</Sty.OptionText>
          </Sty.Option>
          <Sty.Option onPress={() => console.log("Click")}>
            <Sty.OptionText>Meus Endereços</Sty.OptionText>
          </Sty.Option>
          <Sty.Option onPress={() => console.log("Click")}>
            <Sty.OptionText>Meus Pedidos</Sty.OptionText>
          </Sty.Option>
        </Sty.Options>
      </Sty.ProfileWrapper>
    </Sty.Container>
  );
}
