import React, { useState } from "react";
import { StatusBar } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import { useAuth } from "../../hooks/useAuth";

import * as Sty from "./styles";

export function Profile() {
  const theme = useTheme();
  const { user, logout } = useAuth();

  const [name] = useState(() => user.name.split(" ")[0]);

  const handleLogout = async () => {
    console.log("Click");
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

      <Sty.Header>
        <Sty.Title>
          Olá, <Sty.Name>{name}</Sty.Name>
        </Sty.Title>
      </Sty.Header>

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
