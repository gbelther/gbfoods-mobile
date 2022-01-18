import React from "react";
import { TouchableOpacityProps } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Title } from "./styles";

interface IProps extends TouchableOpacityProps {
  title: string;
  backgroundColor?: string;
  fontColor?: string;
}

export function SubmitButton({
  title,
  backgroundColor,
  fontColor,
  ...rest
}: IProps) {
  return (
    <Container {...rest} backgroundColor={backgroundColor}>
      <Title fontColor={fontColor}>{title}</Title>
    </Container>
  );
}
