import React from "react";
import { AntDesign } from "@expo/vector-icons";

import { Container } from "./styles";
import { BorderlessButtonProps } from "react-native-gesture-handler";
import { useTheme } from "styled-components";

interface IProps extends BorderlessButtonProps {
  color?: string;
}

export function BackButton({ color, ...rest }: IProps) {
  const theme = useTheme();
  return (
    <Container {...rest}>
      <AntDesign
        name="left"
        size={32}
        color={color ?? theme.colors.background_inverted}
      />
    </Container>
  );
}
