import React from "react";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";
import { useTheme } from "styled-components";

import { Container, Title } from "./styles";

interface IProps extends TouchableOpacityProps {
  title: string;
  backgroundColor?: string;
  fontColor?: string;
  loading?: boolean;
}

export function SubmitButton({
  title,
  backgroundColor,
  fontColor,
  loading,
  ...rest
}: IProps) {
  const theme = useTheme();

  return (
    <Container {...rest} backgroundColor={backgroundColor}>
      {loading ? (
        <ActivityIndicator color={fontColor ?? theme.colors.text} size={34} />
      ) : (
        <Title fontColor={fontColor}>{title}</Title>
      )}
    </Container>
  );
}
